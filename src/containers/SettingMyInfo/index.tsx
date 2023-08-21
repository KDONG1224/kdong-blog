// base
import React from 'react';

// style
import { StyledSettingMyInfo } from './style';

// modules
import { authRoleState } from 'modules';

// libraries
import { useRecoilValue } from 'recoil';
import { Descriptions, Form, Radio } from 'antd';
import { useForm } from 'antd/lib/form/Form';

export const SettingMyInfo = () => {
  const isAdminRole = useRecoilValue(authRoleState);

  const [form] = useForm();

  return (
    <StyledSettingMyInfo>
      <div className="smi-wrapper">
        <Form form={form}>
          <Descriptions column={24} bordered style={{ marginBottom: '30px' }}>
            {/* 이름 */}
            <Descriptions.Item span={12} label="이름">
              KDONG
            </Descriptions.Item>

            {/* 권한 */}
            <Descriptions.Item label="권한" span={12}>
              {isAdminRole === 'isSuperuser' ? '최고 관리자' : '게스트'}
            </Descriptions.Item>

            {/* 타이틀 */}
            <Descriptions.Item label="타이틀" span={12}>
              밥값하는 개발자
            </Descriptions.Item>

            {/* 이메일 */}
            <Descriptions.Item label="이메일" span={12}>
              gkfl8809@naver.com
            </Descriptions.Item>

            {/* 비고 */}
            <Descriptions.Item label="비고" span={24}>
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
    </StyledSettingMyInfo>
  );
};
