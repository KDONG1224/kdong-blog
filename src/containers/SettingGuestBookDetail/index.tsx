// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledSettingGuestBookDetail } from './style';

// modules
import { authRoleState } from 'modules';

// libraries
import { useRecoilValue } from 'recoil';
import { Descriptions, Form, Radio } from 'antd';
import { useForm } from 'antd/lib/form/Form';

export const SettingGuestBookDetail = () => {
  const isAdminRole = useRecoilValue(authRoleState);

  const [form] = useForm();
  const router = useRouter();
  const { id } = router.query;

  return (
    <StyledSettingGuestBookDetail>
      <div className="sgbd-wrapper">
        <Form form={form}>
          <Descriptions column={24} bordered style={{ marginBottom: '30px' }}>
            <Descriptions.Item span={10} label="이름">
              KDONG {id}
            </Descriptions.Item>

            <Descriptions.Item label="권한" span={14}>
              {isAdminRole === 'isSuperuser' ? '최고 관리자' : '게스트'}
            </Descriptions.Item>
            <Descriptions.Item label="이메일" span={14}>
              gkfl8809@naver.com
            </Descriptions.Item>

            <Descriptions.Item label="비고" span={8}>
              <Form.Item name="recommender">
                <Radio.Group>
                  <Radio value>활성화</Radio>
                  <Radio value={false}>비활성화</Radio>
                </Radio.Group>
              </Form.Item>
            </Descriptions.Item>
          </Descriptions>
        </Form>
      </div>
    </StyledSettingGuestBookDetail>
  );
};
