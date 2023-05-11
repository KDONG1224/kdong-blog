// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingGuestBook } from 'containers';

const AdminSettingGuestBook = () => {
  return (
    <AdminLayout title="방명록 관리">
      <SettingGuestBook />
    </AdminLayout>
  );
};

export default AdminSettingGuestBook;
