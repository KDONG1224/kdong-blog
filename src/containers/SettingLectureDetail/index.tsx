// base
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledSettingLectureDetail } from './style';

// components
import { LectureForm } from 'components';

// modules
import { CreateLectureProps, LectureApi } from 'modules';

// libraries
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import nProgress from 'nprogress';
import { ROUTE_ADMIN_LECTURE_LIST } from 'consts';

export const SettingLectureDetail = () => {
  const [isCreate, setIsCreate] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  const lectureApi = useMemo(() => {
    return new LectureApi();
  }, []);

  const createLecture = (values: CreateLectureProps) => {
    return lectureApi.createLectureClient(values);
  };

  const findLecture = () => {
    if (!id) return;

    return lectureApi.findLecture(id as string);
  };

  const { data: lectureData } = useQuery(
    ['QUERY_LECTURE_DATA', nProgress],
    () => findLecture(),
    {
      select: (data) => data
    }
  );

  const { mutate: craete } = useMutation<CreateLectureProps, unknown, any, any>(
    (values) => createLecture(values),
    {
      onMutate: async () => {
        nProgress.start();

        return await queryClient.cancelQueries(['QUERY_LECTURE_DATA']);
      },
      onSuccess: () => {
        nProgress.done();

        router.push(ROUTE_ADMIN_LECTURE_LIST);

        return queryClient.invalidateQueries(['QUERY_LECTURE_DATA']);
      },
      onError: (_, __, context) => {
        nProgress.done();
        return queryClient.setQueryData(['QUERY_LECTURE_DATA'], context.prev);
      }
    }
  );

  const onSubmit = (values: CreateLectureProps) => {
    craete(values);
  };

  useEffect(() => {
    if (!id) return;

    setIsCreate(true);
  }, [id, router]);

  return (
    <StyledSettingLectureDetail>
      <div className="sld-wrapper">
        <LectureForm
          lectureData={lectureData}
          isCreate={!isCreate}
          onSubmit={onSubmit}
        />
      </div>
    </StyledSettingLectureDetail>
  );
};
