// base
import React from 'react';

// styles
import { StyledCommentBox } from './style';

// modules
import { BaseComment, PrivateCommentProps } from 'modules';

// libraries
import dayjs from 'dayjs';
import { Avatar, Button, Form, Input, Popconfirm } from 'antd';
import { LockOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';

interface CommentBoxProps {
  data: BaseComment;
  onClickPrivate: (values: PrivateCommentProps) => void;
}

export const CommentBox: React.FC<CommentBoxProps> = ({
  data,
  onClickPrivate
}) => {
  const [form] = useForm();

  const onOpenChange = (e: boolean) => {
    if (!e) form.resetFields();
  };

  const onFinish = (values: PrivateCommentProps) => {
    console.log(values);
    onClickPrivate(values);
  };

  return (
    <StyledCommentBox>
      <div className="box-wrapper">
        <p className={`box-wrapper-desc ${data.isPrivate ? 'private' : ''}`}>
          {data.isPrivate && (
            <Popconfirm
              title="비밀댓글 보기"
              description={
                <Form
                  form={form}
                  onFinish={onFinish}
                  className="private-wrapper"
                >
                  <div
                    className="private-wrapper-box"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      marginBottom: 10
                    }}
                  >
                    <div
                      className="private-wrapper-box-label"
                      style={{ minWidth: 60 }}
                    >
                      이름
                    </div>
                    <Form.Item name="username" noStyle required>
                      <Input />
                    </Form.Item>
                  </div>

                  <div
                    className="private-wrapper-box"
                    style={{ display: 'flex', alignItems: 'center', gap: 14 }}
                  >
                    <div
                      className="private-wrapper-box-label"
                      style={{ minWidth: 60 }}
                    >
                      비밀번호
                    </div>
                    <Form.Item name="password" noStyle>
                      <Input.Password />
                    </Form.Item>
                  </div>
                </Form>
              }
              onOpenChange={(e) => onOpenChange(e)}
              onConfirm={() => onFinish(form.getFieldsValue())}
              placement="right"
            >
              <LockOutlined style={{ marginRight: 10, cursor: 'pointer' }} />
            </Popconfirm>
          )}
          {data.comment}
        </p>
        <div className="box-wrapper-avatar">
          <Avatar size={36} icon={<UserOutlined />} />
        </div>
        <div className="box-wrapper-info">
          <Button className="box-wrapper-edit">
            <MoreOutlined onClick={() => alert('댓글 수정은 준비중 입니다.')} />
          </Button>
          <div className="box-wrapper-info-username">{data.username}</div>
          <div className="box-wrapper-info-date">
            {dayjs(data.createdAt).format('YYYY.MM.DD HH:mm')}
          </div>
        </div>
      </div>
    </StyledCommentBox>
  );
};
