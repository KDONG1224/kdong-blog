// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingLectureList } from 'containers';

const AdminSettingLectureList = () => {
  return (
    <AdminLayout title="게시글 관리">
      <SettingLectureList />
    </AdminLayout>
  );
};

export default AdminSettingLectureList;
