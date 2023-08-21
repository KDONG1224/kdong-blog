// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingPageMainTabs } from 'containers';

const AdminSettingPageMain = () => {
  return (
    <AdminLayout title="메인페이지 관리" btnFormId="admin-main-form">
      <SettingPageMainTabs />
    </AdminLayout>
  );
};

export default AdminSettingPageMain;
