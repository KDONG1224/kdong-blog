// base
import React, { useEffect, useState, useCallback } from 'react';

// style
import { StyledSettingPageMAinFaqAddModalProps } from './style';

// modules
import { MainFaqProps, ResponseFaqContent } from 'modules';

// consts
import { faqTypeList } from 'consts';

// libraries
import { Button, Col, Input, Row, Select, Descriptions, Form } from 'antd';

interface SettingPageMAinFaqAddModalProps {
  visible: boolean;
  faqList?: MainFaqProps[];
  faq?: MainFaqProps;
  create?: boolean;
  onCancel?: () => void;
  onSubmit: (values: MainFaqProps[]) => void;
}

export const SettingPageMAinFaqAddModal: React.FC<
  SettingPageMAinFaqAddModalProps
> = ({ visible, onCancel, faqList, faq, create, onSubmit }) => {
  const [selectedFaq, setSelectedFaq] = useState<string>('');

  const [form] = Form.useForm();

  const updateSelectedFaq = useCallback(() => {
    if (visible) {
      form.resetFields();
    }

    setSelectedFaq('');

    if (faq) {
      setSelectedFaq(faq.faqType);
    }
  }, [form, faq, visible]);

  const handleOnFinish = useCallback(
    (values: ResponseFaqContent) => {
      const data: MainFaqProps[] = [];

      if (!faqList || selectedFaq === '') return;

      if (create) {
        data.push(...faqList, {
          seq: faqList.length + 1,
          faqType: selectedFaq,
          ...values
        });
      }

      if (!create) {
        if (!faq) return;

        faqList.forEach((item) => {
          if (item.seq === faq.seq) {
            data.push({ ...item, ...values });
          } else {
            data.push(item);
          }
        });
      }

      onSubmit(data);

      if (onCancel) {
        form.resetFields();
        setSelectedFaq('');
        onCancel();
      }
    },
    [faqList, faq, onCancel, onSubmit, form, create, selectedFaq]
  );

  const handleCancel = () => {
    if (onCancel) {
      form.resetFields();
      onCancel();
    }
  };

  const handleSelectedFaqChange = (value: string) => {
    setSelectedFaq(value);
  };

  useEffect(() => {
    updateSelectedFaq();
  }, [form, visible, faq, create, updateSelectedFaq]);

  return (
    <StyledSettingPageMAinFaqAddModalProps
      centered
      closable
      title={!faq ? '질문 & 답변 생성' : '질문 & 답변 수정'}
      open={visible}
      footer={false}
      width={600}
      destroyOnClose
      onCancel={handleCancel}
    >
      <div>
        <Form
          form={form}
          onFinish={handleOnFinish}
          initialValues={{
            question: faq ? faq.question : '',
            answer: faq ? faq.answer : ''
          }}
        >
          <Descriptions bordered column={24}>
            <Descriptions.Item label="* 분류 선택" span={24}>
              <Row>
                <Col>
                  <Select
                    value={faq && faq.faqType}
                    style={{ width: 120 }}
                    onChange={handleSelectedFaqChange}
                    disabled={faq && true}
                  >
                    {faqTypeList.map(({ label, value }) => (
                      <Select.Option key={value} value={value}>
                        {label}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="* 질문" span={24}>
              <Form.Item
                name="question"
                rules={[{ required: true, message: '질문을 입력해주세요.' }]}
              >
                <Input.TextArea
                  spellCheck={false}
                  maxLength={1000}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  style={{ resize: 'none', width: '100%' }}
                />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="* 답변" span={24}>
              <Form.Item
                name="answer"
                rules={[{ required: true, message: '답변을 입력해주세요.' }]}
              >
                <Input.TextArea
                  spellCheck={false}
                  maxLength={1000}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  style={{ resize: 'none', width: '100%' }}
                />
              </Form.Item>
            </Descriptions.Item>
          </Descriptions>
          <div
            style={{
              marginTop: '20px',
              textAlign: 'center'
            }}
          >
            <Button onClick={handleCancel}>취소</Button>
            {!faq ? (
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: '5px' }}
              >
                등록
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: '5px' }}
              >
                수정
              </Button>
            )}
          </div>
        </Form>
      </div>
    </StyledSettingPageMAinFaqAddModalProps>
  );
};
