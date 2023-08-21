// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { ImageBankList } from 'containers';

const AdminImageBankListPage = () => {
  return (
    <AdminLayout title="이미지 목록" noSaveBtn>
      <ImageBankList />
    </AdminLayout>
  );
};

export default AdminImageBankListPage;
