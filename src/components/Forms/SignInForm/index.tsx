import React from 'react';

import { Form, Input, Button } from 'antd';

interface SignInFormProps {
  onSubmit?: (values: any) => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    if (onSubmit) {
      const _values = {
        ...values,
        email: values.email && values.email.trim()
      };

      onSubmit(_values);
    }
  };

  return (
    <Form
      form={form}
      style={{ width: 300 }}
      onFinish={(values) => onFinish(values as any)}
    >
      <Form.Item required name="email">
        <Input placeholder="이메일" />
      </Form.Item>
      <Form.Item required name="password">
        <Input.Password placeholder="비밀번호" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          로그인
        </Button>
      </Form.Item>
    </Form>
  );
};
