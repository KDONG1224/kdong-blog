// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingPageMain } from 'containers';

const AdminSettingPagePopup = () => {
  return (
    <AdminLayout title="팝업 관리">
      <SettingPageMain />
    </AdminLayout>
  );
};

export default AdminSettingPagePopup;
