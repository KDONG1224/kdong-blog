// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingMyInfo } from 'containers';

const MyInfoPage = () => {
  return (
    <AdminLayout title="내 정보" btnFormId="">
      <SettingMyInfo />
    </AdminLayout>
  );
};

export default MyInfoPage;
