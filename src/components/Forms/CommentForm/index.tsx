// base
import React, { useEffect, useState } from 'react';

// styles
import { StyledCommentForm } from './style';

// modules
import { CreateCommentFormProps } from 'modules/comment';

// libraries
import { Button, Form, FormProps, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { UpCircleFilled } from '@ant-design/icons';

interface CommentFormProps extends FormProps {
  isSubmit: boolean;
  onSubmit: (values: CreateCommentFormProps) => void;
}

export const CommentForm: React.FC<CommentFormProps> = ({
  isSubmit,
  onSubmit,
  ...props
}) => {
  // const [isPrivate, setIsPrivate] = useState(false);

  const [form] = useForm();

  // const onChangePrivate = () => {
  //   setIsPrivate((prev) => !prev);
  // };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    form.setFieldValue('username', value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    form.setFieldValue('password', value);
  };

  const onFinish = (values: CreateCommentFormProps) => {
    if (!values.username) {
      alert('이름을 입력해주세요.');
      return;
    }

    if (!values.password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    if (!values.comment) {
      alert('댓글 내용을 입력해주세요.');
      return;
    }

    const data = {
      ...values,
      isPrivate: false
    };

    onSubmit(data);
  };

  useEffect(() => {
    if (!isSubmit) return;

    form.resetFields();
  }, [form, isSubmit]);

  return (
    <StyledCommentForm {...props} form={form} onFinish={onFinish}>
      <div className="comment-wrapper">
        <div className="comment-wrapper-content">
          <Form.Item
            noStyle
            name="comment"
            className="comment-wrapper-content-textarea"
          >
            <Input.TextArea />
          </Form.Item>
          <div className="comment-wrapper-content-field">
            <div className="comment-wrapper-content-field-box">
              <div className="comment-wrapper-content-field-box-username-label">
                이름
              </div>
              <Form.Item
                noStyle
                name="username"
                className="comment-wrapper-content-field-box-username"
              >
                <Input
                  placeholder="이름을 입력해주세요."
                  onChange={onChangeUsername}
                />
              </Form.Item>
              <div className="comment-wrapper-content-field-box-password-label">
                암호
              </div>
              <Form.Item
                noStyle
                name="password"
                className="comment-wrapper-content-field-box-password"
              >
                <Input
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={onChangePassword}
                />
              </Form.Item>
            </div>
            <div className="comment-wrapper-content-field-icons">
              {/* {isPrivate ? (
                <LockOutlined onClick={onChangePrivate} />
              ) : (
                <UnlockOutlined onClick={onChangePrivate} />
              )} */}
              <Button htmlType="submit">
                <UpCircleFilled />
              </Button>
            </div>
          </div>
        </div>

        <div className="view-wrapper-bottom-comments-avatar" />
      </div>
    </StyledCommentForm>
  );
};
