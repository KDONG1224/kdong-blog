// base
import React, { useState } from 'react';

// style
import { StyledGuestbookForm } from './style';

// components
import { BlurImage, CommonDrawer, ImgUploader } from 'components';
import { InputLabel, MetaInputString } from 'components/Input';

// libraries
import { Button, Form, Input, Space, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useMedia } from 'hooks';

interface GuestbookFormProps {
  open: boolean;
  handleCreateClose: (e: any) => void;
  onSubmit?: (values: FormData) => void;
}

export const GuestbookForm: React.FC<GuestbookFormProps> = ({
  open,
  handleCreateClose,
  onSubmit
}) => {
  const [form] = useForm();
  const { isMobile } = useMedia();

  const [fileList, setFileList] = useState<string[]>([]);
  const [imgList, setImgList] = useState<any>();

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (imgList) {
      return;
    }

    if (e.target.files) {
      if (e.target.files.length === 0) {
        return;
      }
      if (e.target.files.length > 1) {
        message.error({
          content: '1개의 이미지를 업로드 할 수 있습니다. ',
          style: {
            marginTop: '5.5vh',
            fontSize: '24px'
          }
        });
        return;
      }
      const blobList: string[] = [];

      Array.prototype.forEach.call(e.target.files, (file) => {
        const blob = new Blob([file], { type: file.type });
        setImgList(file);

        form.setFieldValue('images', file);

        blobList.push(URL.createObjectURL(blob));
      });

      setFileList(blobList);
    }

    e.target.value = '';
  };

  const onClickImageDelete = () => {
    setFileList([]);
    setImgList(undefined);
    form.setFieldsValue({
      images: []
    });
  };

  const onFinish = (values: any) => {
    const { name, email, content } = values;
    const formData = new FormData();

    message.destroy();
    if (name === undefined || email === undefined || content === undefined) {
      message.error({
        content: '작성내용을 다시한번 확인해주세요.',
        style: {
          marginTop: '5.5vh',
          fontSize: '24px'
        }
      });

      return;
    }

    formData.append('name', name);
    formData.append('email', email);
    formData.append('content', content);

    if (imgList !== undefined) {
      formData.append('images', imgList, imgList.name);
    }

    if (onSubmit) {
      onSubmit(formData);
    }

    form.resetFields();
    onClickImageDelete();

    return;
  };

  return (
    <CommonDrawer
      title="방명록 작성하기"
      open={open}
      onClose={handleCreateClose}
      width={isMobile ? '100%' : 500}
      extra={
        <>
          <Button
            htmlType="submit"
            onClick={() => onFinish(form.getFieldsValue())}
          >
            등록하기
          </Button>
        </>
      }
    >
      <StyledGuestbookForm form={form} onFinish={onFinish}>
        <div className="guestbook-wrapper">
          <div className="guestbook-wrapper-name">
            <Space style={{ height: '4.6rem' }}>
              <InputLabel text="이름" require />
              <Form.Item
                name="name"
                className="form-wrapper-middle-top-name"
                required
              >
                <MetaInputString
                  style={{
                    minHeight: 40,
                    width: 350
                  }}
                  placeholder="이름을 입력해주세요."
                />
              </Form.Item>
            </Space>
          </div>
          <div className="guestbook-wrapper-email">
            <Space style={{ height: '4.6rem' }}>
              <InputLabel text="이메일" require />
              <Form.Item name="email" className="form-wrapper-middle-top-email">
                <MetaInputString
                  style={{
                    minHeight: 40,
                    width: 350
                  }}
                  placeholder="이메일을 입력해주세요."
                />
              </Form.Item>
            </Space>
          </div>
          <div className="guestbook-wrapper-content">
            <Space style={{ height: '24rem' }}>
              <InputLabel text="내용" require />
              <Form.Item
                className="form-wrapper-middle-content"
                name="content"
                required
              >
                <Input.TextArea placeholder="내용을 입력해주세요." />
              </Form.Item>
            </Space>
          </div>
          <div className="guestbook-wrapper-thumb">
            <Space style={{ height: '4.6rem' }}>
              <Form.Item
                className="guest-images"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: 0,
                  marginTop: 20
                }}
              >
                {fileList.length < 1 && (
                  <ImgUploader onChangeFile={onChangeFile} />
                )}
                {fileList?.map((file, idx) => {
                  return (
                    <div key={idx}>
                      <div
                        style={{
                          position: 'absolute',
                          width: '50px',
                          height: '50px',
                          background: '#ff4c01',
                          fontWeight: 600,
                          fontSize: 30,
                          textAlign: 'center',
                          lineHeight: '50px',
                          marginLeft: '100px',
                          color: '#fff',
                          cursor: 'pointer',
                          zIndex: 99
                        }}
                        onClick={onClickImageDelete}
                      >
                        X
                      </div>
                      <BlurImage
                        src={file || ''}
                        alt=""
                        width={150}
                        height={150}
                      />
                    </div>
                  );
                })}
              </Form.Item>
            </Space>
          </div>
        </div>
      </StyledGuestbookForm>
    </CommonDrawer>
  );
};
