// base
import React, { useMemo } from 'react';

// style
import { StyledSettingPageMainBanner } from './style';

// components
import { BannerManager } from 'components';

// modules
import {
  AuthApi,
  CreateMainBannerProps,
  MainBannerProps,
  ResponseProfile
} from 'modules';

// libraries
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import nProgress from 'nprogress';

export const SettingPageMainBanner = () => {
  const queryClient = useQueryClient();

  const authApi = useMemo(() => {
    return new AuthApi();
  }, []);

  const getKdongProfile = () => {
    if (!authApi) return Promise.reject({});

    return authApi.getKdongProfileClient();
  };

  const createKdongProfile = (data: ResponseProfile) => {
    if (!authApi) return Promise.reject({});

    return authApi.createKdongProfile(data);
  };

  const { data: kdongProfile } = useQuery<ResponseProfile>(
    ['QUERY_KDONG_PROFILE', nProgress],
    () => getKdongProfile(),
    {
      select: (data) => data
    }
  );

  const { mutate: createProfile } = useMutation<
    ResponseProfile,
    unknown,
    any,
    any
  >((data: ResponseProfile) => createKdongProfile(data), {
    onMutate: async () => {
      await queryClient.cancelQueries(['QUERY_KDONG_PROFILE_CREATE']);
      nProgress.start();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['QUERY_KDONG_PROFILE_CREATE']);

      nProgress.done();
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['QUERY_KDONG_PROFILE_CREATE'], context.prev);
    }
  });

  const onSubmit = (values: CreateMainBannerProps) => {
    if (!kdongProfile || !values) return;

    const result = {
      ...kdongProfile,
      name: 'KDONG',
      mainBanner: {
        ...kdongProfile.mainBanner,
        ...values
      }
    };

    createProfile(result);
  };

  return (
    <StyledSettingPageMainBanner>
      <div className="spmb-wrapper">
        <BannerManager
          bannerData={kdongProfile?.mainBanner as MainBannerProps}
          onSubmit={onSubmit}
        />
      </div>
    </StyledSettingPageMainBanner>
  );
};
