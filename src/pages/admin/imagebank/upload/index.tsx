// base
import React from 'react';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { ImageBankUpload } from 'containers';

const AdminImageBankUploadPage = () => {
  return (
    <AdminLayout title="이미지 업로드">
      <ImageBankUpload />
    </AdminLayout>
  );
};

export default AdminImageBankUploadPage;
