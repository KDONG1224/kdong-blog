// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingPagePopup } from 'containers';

const AdminSettingPagePopup = () => {
  return (
    <AdminLayout title="팝업 관리">
      <SettingPagePopup />
    </AdminLayout>
  );
};

export default AdminSettingPagePopup;
