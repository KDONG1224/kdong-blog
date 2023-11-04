// base
import { useEffect, useMemo } from 'react';

// modules
import {
  LectureApi,
  ResponseLecture,
  UpdateLectureProps,
  loadingState
} from 'modules';

// consts
import { GET_LECTURE_LIST } from 'consts';

// libraries

import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

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
  const setLoading = useSetRecoilState(loadingState);

  const queryClient = useQueryClient();

  const lectureApi = useMemo(() => {
    return new LectureApi();
  }, []);

  const getLectureList = async () => {
    const filter = {
      skip,
      limit,
      type,
      where
    };

    return await lectureApi.getLecture(filter);
  };

  const updateLecture = async (values: UpdateLectureProps) => {
    return await lectureApi.updateLectureClient(values);
  };

  const deleteLecture = async (id: string) => {
    return await lectureApi.deleteLectureClient(id);
  };

  const { data, isLoading } = useQuery<ResponseLecture[], AxiosError>(
    [GET_LECTURE_LIST, where],
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
      return queryClient.invalidateQueries([GET_LECTURE_LIST]);
    },
    onError: (_, __, context) => {
      return queryClient.setQueryData([GET_LECTURE_LIST], context);
    },
    onMutate: async () => {
      return await queryClient.cancelQueries([GET_LECTURE_LIST]);
    },
    onSettled: () => {
      return queryClient.invalidateQueries([GET_LECTURE_LIST]);
    }
  });

  const { mutateAsync: deleteLectureId } = useMutation<
    string,
    AxiosError,
    string
  >((id) => deleteLecture(id), {
    onSuccess: () => {
      return queryClient.invalidateQueries([GET_LECTURE_LIST]);
    },
    onError: (_, __, context) => {
      return queryClient.setQueryData([GET_LECTURE_LIST], context);
    },
    onMutate: async () => {
      return await queryClient.cancelQueries([GET_LECTURE_LIST]);
    },
    onSettled: () => {
      return queryClient.invalidateQueries([GET_LECTURE_LIST]);
    }
  });

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return { data, update, deleteLectureId };
};
