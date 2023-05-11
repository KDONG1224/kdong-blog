// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledAdminLogoBox } from './style';

// modules
import { authRoleState } from 'modules';

// consts
import { ROUTE_ADMIN, ROUTE_ADMIN_SIGNIN } from 'consts';

// libraries
import { Button } from 'antd';
import { useRecoilValue } from 'recoil';

interface AdminLogoBoxProps {
  isCollapsed: boolean;
}

export const AdminLogoBox: React.FC<AdminLogoBoxProps> = ({ isCollapsed }) => {
  const isAdminRole = useRecoilValue(authRoleState);

  const router = useRouter();

  const handleMainText = () => {
    router.replace(ROUTE_ADMIN);
  };

  const handleLogout = () => {
    router.replace(ROUTE_ADMIN_SIGNIN);
  };

  return (
    <StyledAdminLogoBox>
      <div className={`logo-wrapper ${isCollapsed ? 'col' : ''}`}>
        <div className="logo-wrapper-top">
          <h2 onClick={handleMainText}>KDONG{!isCollapsed && ' ADMIN'}</h2>
        </div>
        {!isCollapsed && (
          <>
            <div className="logo-wrapper-middle">
              <p className="logo-wrapper-middle-role">
                {isAdminRole === 'isSuperuser' ? '최고 관리자' : '게스트'}
              </p>
              <p className="logo-wrapper-middle-name">KDONG</p>
              <p className="logo-wrapper-middle-email">gkfl8809@naver.com</p>
            </div>
            <div className="logo-wrapper-bottom">
              <Button onClick={handleLogout}>로그아웃</Button>
            </div>
          </>
        )}
      </div>
    </StyledAdminLogoBox>
  );
};
