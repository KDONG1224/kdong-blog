// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingPageMain } from 'containers';

const AdminSettingPageMain = () => {
  return (
    <AdminLayout title="메인페이지 관리">
      <SettingPageMain />
    </AdminLayout>
  );
};

export default AdminSettingPageMain;
