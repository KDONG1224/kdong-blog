// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingGuestBookDetail } from 'containers';

const AdminSettingGuestBookDetail = () => {
  return (
    <AdminLayout title="게시글 자세히보기">
      <SettingGuestBookDetail />
    </AdminLayout>
  );
};

export default AdminSettingGuestBookDetail;
