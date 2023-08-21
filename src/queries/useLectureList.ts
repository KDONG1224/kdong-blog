// base
import { useMemo } from 'react';

// modules
import { LectureApi, ResponseLecture, UpdateLectureProps } from 'modules';

// consts
import { GET_LECTURE_LIST } from 'consts';

// libraries
import nProgress from 'nprogress';
import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface UseLectureListProps {
  skip: number;
  limit: number;
  type: string;
  where: any;
}

export const useLectureList = ({
  skip,
  limit,
  type,
  where
}: UseLectureListProps) => {
  const queryClient = useQueryClient();

  const lectureApi = useMemo(() => {
    return new LectureApi();
  }, []);

  const getLectureList = async () => {
    nProgress.start();

    const filter = {
      skip,
      limit,
      type,
      where
    };

    nProgress.done();
    return await lectureApi.getLecture(filter);
  };

  const updateLecture = async (values: UpdateLectureProps) => {
    return await lectureApi.updateLectureClient(values);
  };

  const deleteLecture = async (id: string) => {
    return await lectureApi.deleteLectureClient(id);
  };

  const { data } = useQuery<ResponseLecture[], AxiosError>(
    [GET_LECTURE_LIST, nProgress, where],
    getLectureList,
    {
      select: (data) => data
    }
  );

  const { mutateAsync: update } = useMutation<
    ResponseLecture,
    AxiosError,
    ResponseLecture
  >((values) => updateLecture(values), {
    onSuccess: () => {
      nProgress.done();

      return queryClient.invalidateQueries([GET_LECTURE_LIST, nProgress]);
    },
    onError: (_, __, context) => {
      nProgress.done();

      return queryClient.setQueryData([GET_LECTURE_LIST], context);
    },
    onMutate: async () => {
      nProgress.start();

      return await queryClient.cancelQueries([GET_LECTURE_LIST]);
    },
    onSettled: () => {
      nProgress.done();

      return queryClient.invalidateQueries([GET_LECTURE_LIST, nProgress]);
    }
  });

  const { mutateAsync: deleteLectureId } = useMutation<
    string,
    AxiosError,
    string
  >((id) => deleteLecture(id), {
    onSuccess: () => {
      nProgress.done();

      return queryClient.invalidateQueries([GET_LECTURE_LIST, nProgress]);
    },
    onError: (_, __, context) => {
      nProgress.done();

      return queryClient.setQueryData([GET_LECTURE_LIST], context);
    },
    onMutate: async () => {
      nProgress.start();

      return await queryClient.cancelQueries([GET_LECTURE_LIST]);
    },
    onSettled: () => {
      nProgress.done();

      return queryClient.invalidateQueries([GET_LECTURE_LIST, nProgress]);
    }
  });

  return { data, update, deleteLectureId };
};
