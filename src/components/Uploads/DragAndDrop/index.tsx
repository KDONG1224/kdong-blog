// base
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// style
import { StyledDragAndDrop } from './style';

// libraries
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { PlusOutlined } from '@ant-design/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { ImagebankApi, ResponseImageBankListProps } from 'modules';
import nProgress from 'nprogress';

interface DragAndDropProps {
  onUpload: (data: ResponseImageBankListProps) => void;
}

export const DragAndDrop: React.FC<DragAndDropProps> = ({ onUpload }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const queryClient = useQueryClient();

  const imagebankApi = useMemo(() => {
    return new ImagebankApi();
  }, []);

  const uploadImage = (file: FormData) => {
    return imagebankApi.uploadImagebank('lecture', file);
  };

  const { mutate } = useMutation<any, unknown, any, any>(
    (file) => uploadImage(file),
    {
      onMutate: async () => {
        nProgress.start();

        return await queryClient.cancelQueries(['QUERY_IMAGEBANK_UPLOAD']);
      },
      onSuccess: (data) => {
        nProgress.done();

        console.log('== success data  == : ', data);
        onUpload(data);

        return queryClient.invalidateQueries(['QUERY_IMAGEBANK_UPLOAD']);
      },
      onError: (_, __, context) => {
        console.error(context);

        return queryClient.setQueryData(['QUERY_IMAGEBANK_UPLOAD'], context);
      }
    }
  );

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    if (fileList.length === 1) return;

    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onUploadImage = useCallback(() => {
    if (fileList.length <= 0) return;

    // const blobList: string[] = [];
    const formData = new FormData();
    // let files: any;

    // Array.prototype.forEach.call(fileList, (file) => {
    //   const blob = new Blob([file], { type: file.type });

    //   files = file;

    //   console.log('== blob == : ', blob);
    //   console.log('== file == : ', file);
    //   console.log('== blob.name == : ', blob.name);

    //   blobList.push(URL.createObjectURL(blob));
    // });

    formData.append('uploadFile', fileList[0].originFileObj as Blob);

    mutate(formData);
  }, [fileList, mutate]);

  useEffect(() => {
    onUploadImage();
  }, [onUploadImage]);

  return (
    <StyledDragAndDrop>
      <ImgCrop rotationSlider>
        <Upload.Dragger
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          beforeUpload={() => false}
          onRemove={() => setFileList([])}
          maxCount={1}
        >
          <p className="ant-upload-drag-icon">
            <PlusOutlined />
          </p>
          <p className="ant-upload-text">Drag & Drop으로 파일 업로드</p>
          <p className="ant-upload-hint">
            혹은 클릭하여 파일 선택하여 업로드 해주세요.
          </p>
        </Upload.Dragger>
      </ImgCrop>
    </StyledDragAndDrop>
  );
};
