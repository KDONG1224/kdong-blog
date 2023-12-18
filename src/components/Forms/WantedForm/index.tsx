// base
import React from 'react';

// style
import { StyledWantedForm } from './style';

// components
import { BasicButton } from 'components';

// modules
import { RequestWantedProps } from 'modules/wanted';

// libraries
import { Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';

// libraries

interface WantedFormProps {
  onSubmit: (values: RequestWantedProps) => void;
}

export const WantedForm: React.FC<WantedFormProps> = ({ onSubmit }) => {
  const [form] = useForm();

  const onFinish = (values: RequestWantedProps) => {
    onSubmit(values);
  };

  return (
    <StyledWantedForm>
      <div className="wform-wrapper">
        <Form className="wform-wrapper-form" form={form} onFinish={onFinish}>
          <Form.Item
            name="clientName"
            rules={[
              {
                type: 'string',
                required: true,
                message: '이름 및 회사명를 확인해주세요.'
              }
            ]}
          >
            <Input
              className="wform-wrapper-form-input"
              placeholder="이름 및 회사명을 입력해주세요."
            />
          </Form.Item>

          <Form.Item
            name="clientEmail"
            rules={[
              {
                type: 'email',
                required: true,
                message: '이메일을 확인 해주세요.'
              }
            ]}
          >
            <Input
              className="wform-wrapper-form-input"
              placeholder="이메일을 입력해주세요."
            />
          </Form.Item>

          <div className="wform-wrapper-form-btn">
            <BasicButton btnText="전송하기" htmlType="submit" />
          </div>
        </Form>
      </div>
    </StyledWantedForm>
  );
};
