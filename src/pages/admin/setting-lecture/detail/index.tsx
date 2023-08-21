// base
import React from 'react';
import { useRouter } from 'next/router';

// layouts
import { AdminLayout } from 'layouts';

// containers
import { SettingLectureDetail } from 'containers';

const AdminSettingLectureDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AdminLayout title={`게시글 ${id ? '상세보기' : '생성'}`} noSaveBtn>
      <SettingLectureDetail />
    </AdminLayout>
  );
};

export default AdminSettingLectureDetail;
