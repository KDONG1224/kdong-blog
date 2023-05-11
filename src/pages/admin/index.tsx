// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingAdminMain } from 'containers';

const AdminPage = () => {
  return (
    <AdminLayout title="관리자 메인" noSaveBtn>
      <SettingAdminMain />
    </AdminLayout>
  );
};

export default AdminPage;
