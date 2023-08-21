/* eslint-disable @typescript-eslint/no-unused-vars */
// base
import React, { useEffect, useState } from 'react';

// style
import { StyledLectureForm, StyledRequiredLabel } from './style';

// components
import { BlurImage, DragAndDrop, EditorTest, TextEditor } from 'components';

// modules
import {
  CreateLectureProps,
  ImagebankApi,
  ResponseImageBankListProps,
  ResponseLecture
} from 'modules';

// consts
import {
  lectureTypeList,
  selectProjectDivisionOption,
  selectProjectSkillOption,
  selectProjectTypeOption,
  selectTypeOption
} from 'consts';

// libraries
import { useForm } from 'antd/lib/form/Form';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import {
  Button,
  Col,
  ColorPicker,
  Descriptions,
  Form,
  Input,
  Row,
  Select
} from 'antd';

interface LectureFormProps {
  isCreate?: boolean;
  lectureData?: ResponseLecture;
  onSubmit: (values: CreateLectureProps) => void;
}

interface RequiredLabelProps {
  text: string;
  desc?: string;
  require?: boolean;
}

const RequiredLabel = ({ text, desc, require = false }: RequiredLabelProps) => {
  return (
    <StyledRequiredLabel isRequired={require || false}>
      {require && <span className="star">*</span>}
      <span className="text-wrap">
        <span className="text">{text}</span>
        {desc && <span className="desc">{desc}</span>}
      </span>
    </StyledRequiredLabel>
  );
};

export const LectureForm: React.FC<LectureFormProps> = ({
  isCreate = false,
  lectureData,
  onSubmit
}) => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState('');
  const [groupType, setGroupType] = useState('');
  const [colorType, setColorType] = useState<'hex' | 'hsb' | 'rgb'>('hex');
  const [isThumb, setIsThumb] = useState<ResponseImageBankListProps>();
  const [isCkeditorState, setIsCkeditorState] = useState<string>('');
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const [form] = useForm();

  const handleUpload = (file: ResponseImageBankListProps) => {
    setIsThumb(file);
  };

  const onChangeText = (data: string) => {
    setIsCkeditorState(data);
  };

  const onChangeType = (value: string) => {
    setGroupType(value);
  };

  const onFinish = (values: CreateLectureProps) => {
    console.log('== values == : ', values);

    if (!onSubmit) return;

    const data = {
      ...values,
      expose: true,
      tags: values.tags ? values.tags.toString().split(',') : [''],
      thumbnail: isThumb,
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      // content: isCkeditorState
      projectType: values.projectType || '',
      positionType: values.positionType || '',
      skillType: values.skillType || '',
      badgeColor: '#343434'
    };

    console.log(data);

    onSubmit(data);
  };

  useEffect(() => {
    if (!lectureData) return;

    form.setFieldsValue({
      group: lectureData.group,
      title: lectureData.title,
      subtitle: lectureData.subtitle,
      tags: lectureData.tags,
      colors: lectureData.colors
    });

    setEditorState(
      EditorState.createWithContent(
        convertFromRaw(JSON.parse(lectureData.content))
      )
    );
  }, [form, lectureData]);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <StyledLectureForm
      form={form}
      onFinish={(values) => onFinish(values as CreateLectureProps)}
    >
      <div className="lf-wrapper">
        <div className="lf-wrapper-top">
          <Row justify="end">
            <Col>
              <Button type="primary" htmlType="submit">
                {isCreate ? '등록' : '수정'}
              </Button>
            </Col>
          </Row>
        </div>
        <div className="lf-wrapper-body">
          <Descriptions bordered column={4}>
            {/* 게시판 종류 */}
            <Descriptions.Item
              label={<RequiredLabel text="게시판 종류" require />}
              span={2}
            >
              <Form.Item name="group">
                <Select disabled={!isCreate} onChange={(e) => onChangeType(e)}>
                  {lectureTypeList.map(({ label, value }) => (
                    <Select.Option key={value} value={value}>
                      {label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Descriptions.Item>

            {/* 게시판 제목 */}
            <Descriptions.Item
              label={<RequiredLabel text="게시판 제목" require />}
              span={2}
            >
              <Form.Item name="title">
                <Input disabled={!isCreate} />
              </Form.Item>
            </Descriptions.Item>

            {/* 게시판 부제목 */}
            <Descriptions.Item
              label={<RequiredLabel text="게시판 부제목" require />}
              span={2}
            >
              <Form.Item name="subtitle">
                <Input disabled={!isCreate} />
              </Form.Item>
            </Descriptions.Item>

            {/* 태그 */}
            <Descriptions.Item
              label={<RequiredLabel text="태그" desc="ex) html, css, js" />}
              span={1}
            >
              <Form.Item name="tags">
                <Input disabled={!isCreate} />
              </Form.Item>
            </Descriptions.Item>

            {/* 색상 */}
            <Descriptions.Item
              label={<RequiredLabel text="색상" />}
              className="color"
              span={1}
            >
              <Form.Item name="colors">
                <ColorPicker
                  showText
                  onFormatChange={(format) => setColorType(format)}
                  onChangeComplete={(value) => {
                    if (colorType === 'hex') {
                      form.setFieldValue('colors', value.toHexString());
                    } else if (colorType === 'hsb') {
                      form.setFieldValue('colors', value.toHsbString());
                    } else {
                      form.setFieldValue('colors', value.toRgbString());
                    }
                  }}
                />
              </Form.Item>
            </Descriptions.Item>

            {groupType === 'reference' && (
              <>
                <Descriptions.Item
                  label={<RequiredLabel text="종류" require />}
                  span={2}
                >
                  <Form.Item name="projectType">
                    <Select disabled={!isCreate}>
                      {selectProjectTypeOption.map(({ label, value }) => (
                        <Select.Option key={value} value={value}>
                          {label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<RequiredLabel text="구분" require />}
                  span={1}
                >
                  <Form.Item name="positionType">
                    <Select disabled={!isCreate}>
                      {selectProjectDivisionOption.map(({ label, value }) => (
                        <Select.Option key={value} value={value}>
                          {label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Descriptions.Item>
                <Descriptions.Item
                  label={<RequiredLabel text="스킬" require />}
                  span={1}
                >
                  <Form.Item name="skillType">
                    <Select disabled={!isCreate}>
                      {selectProjectSkillOption.map(({ label, value }) => (
                        <Select.Option key={value} value={value}>
                          {label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Descriptions.Item>
              </>
            )}

            {/* 게시판 썸네일 */}
            <Descriptions.Item label={<RequiredLabel text="썸네일" />} span={4}>
              <Form.Item name="thumbnail">
                {isCreate ? (
                  <DragAndDrop onUpload={handleUpload} />
                ) : (
                  <div style={{ height: 200 }}>
                    <BlurImage
                      src={lectureData?.thumbnail?.thumbUrl as string}
                      alt="썸네일"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                )}
              </Form.Item>
            </Descriptions.Item>

            {/* 게시판 글쓰기 */}
            <Descriptions.Item
              span={4}
              label={<RequiredLabel text="게시판 내용" require />}
            >
              <Form.Item name="content">
                <TextEditor
                  readOnly={!isCreate}
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                />
              </Form.Item>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </StyledLectureForm>
  );
};
