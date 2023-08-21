import * as ExcelJS from 'exceljs';
import FileSaver from 'file-saver';
import dayjs from 'dayjs';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

export const createExcelForm = (fakeData) => {
  const workbook = new ExcelJS.Workbook();

  const data = [
    ['성명', '휴대전화번호', '도로명주소', '상세주소'],
    [
      ...fakeData
      // ['짱구', '010-1234-1234', '12345', '서울시 강남구1'],
      // ['철수', '010-5678-5678', '54321', '서울시 강남구2'],
      // ['훈이', '010-1234-5678', '12345', '서울시 강남구3'],
      // ['맹구', '010-5678-5678', '54321', '서울시 강남구4'],
      // ['유리', '010-1234-5678', '12345', '서울시 강남구5'],
      // ['수지', '010-5678-5678', '54321', '서울시 강남구6'],
    ]
  ];
  const sheets = ['배송지 정보 사전등록'];

  sheets.forEach((sheet) => {
    let worksheet = workbook.addWorksheet(sheet);
    let _cancelRowNumber = [];

    worksheet.properties.defaultColWidth = 0.1;
    worksheet.properties.defaultRowHeight = 20;

    worksheet.mergeCells('A1:D1');
    worksheet.getCell('A1').value =
      '※ 엑셀업로드 주의사항 ※ \n \n 1. 받는분의 성명, 휴대전화번호, 주소를 입력해주세요. \n 010-1234-1234 (x) 01012341234 (o) \n (최대 200명까지 가능합니다. ) \n \n 2. 도로명 주소만 지원합니다. \n * 시/도, 도로명, 건물번호 사이에 띄어쓰기 해주세요. \n 예시) 서울시ˇ중구ˇ남대문로ˇ81  \n 서울시ˇ송파구ˇ올림픽로ˇ240 \n \n 3. 양식은 변경하지 말아주세요 :)';
    worksheet.getRow(1).height = 300;
    worksheet.getRow(2).values = data[0];
    worksheet.getRow(2).height = 30;

    const _data = data.slice(1).flat();

    worksheet.addRows(_data);

    worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        if (rowNumber === 1) {
          cell.font = {
            bold: true,
            size: 18,
            color: { argb: 'FFFFFF' }
          };

          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
              argb: '081F5C'
            }
          };
        }

        if (rowNumber === 2) {
          cell.font = {
            bold: true,
            size: 14
          };

          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
              argb: 'd9d9d9'
            }
          };
        }

        cell.width = getColumnMaxLength(data, colNumber - 1);

        cell.alignment = {
          vertical: 'middle',
          wrapText: true,
          horizontal: 'center'
        };

        cell.border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } }
        };
      });
    });

    worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        if (_cancelRowNumber.includes(rowNumber) && colNumber === 1) {
          cell.font = {
            color: { argb: 'FF3300' }
          };
        }
      });
    });

    for (let i = 0; i < worksheet.columns.length; i += 1) {
      let dataMax = 0;
      const column = worksheet.columns[i];
      for (let j = 1; j < worksheet.columns.values.length; j += 1) {
        const columnLength = worksheet.columns.values.length;
        if (columnLength > dataMax) {
          dataMax = columnLength;
        }
      }
      column.width = dataMax < 10 ? 20 : dataMax + 5;
    }
  });

  workbook.xlsx.writeBuffer().then((data) => {
    const blob = new Blob([data], { type: EXCEL_TYPE });

    FileSaver.saveAs(blob, `엑셀양식${EXCEL_EXTENSION}`);
  });

  return false;
};

export const readExcel = async (buffer) => {
  const workbook = new ExcelJS.Workbook();
  const xlsx = await workbook.xlsx.load(buffer);
  const worksheet = xlsx.worksheets[0];
  const rows = Array.of();

  worksheet.eachRow((row) => {
    const cells = Array.of();
    row.eachCell({ includeEmpty: true }, (cell) => {
      // if (cell.value && isDate(cell.value)) {
      if (cell.value && cell.value) {
        cell.value = dayjs(cell.value).format('YYYY-MM-DD');
      }
      cells.push(cell.value ?? '');
    });
    rows.push(cells);
  });
  return rows;
};

export const getColumnMaxLength = (data, columnIndex) => {
  let length = data.reduce((len, item) => {
    const value = item[columnIndex];

    if (value && Number(value.toString().length) > len) {
      len = value.toString().length;
    }

    return len;
  }, 0);

  if (length === 0) {
    length = 15;
  } else if (length === 1) {
    length = length * 10;
  } else if (length <= 5) {
    length = length * 3;
  } else if (length > 5 && length <= 10) {
    length = length * 2;
  } else if (length > 10) {
    length = length * 1.5;
  }

  return length;
};
