// base
import React, { useMemo } from 'react';

// style
import { StyledMainContainer } from './style';

// components
import { MainBanner, TistoryCard } from 'components';

// modules
import { selectThemeState } from 'modules';
import { EverythingApi, ResponseEverything } from 'modules/everything';

// consts
import { QUERY_EVERYTHING } from 'consts';

// libraries
import { Button } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import nProgress from 'nprogress';

export const MainContainer = () => {
  const selectTheme = useRecoilValue(selectThemeState);

  const everythingApi = useMemo(() => {
    return new EverythingApi();
  }, []);

  const getFilterEverything = (number: number) => {
    if (!everythingApi) return Promise.reject([]);

    return everythingApi.getFilterEverything(number);
  };

  const { data } = useQuery<ResponseEverything[]>(
    [QUERY_EVERYTHING, nProgress],
    () => getFilterEverything(5),
    { select: (data) => data }
  );

  return (
    <StyledMainContainer isDarkMode={selectTheme}>
      <div className="main-wrapper">
        <div className="main-wrapper-top">
          <MainBanner />
        </div>

        {data &&
          data.length > 0 &&
          data.map((list) => (
            <div
              key={list.id}
              data-aos="fade-up"
              className="main-wrapper-middle"
            >
              <TistoryCard data={list} />
            </div>
          ))}

        <div className="main-wrapper-bottom">
          <Button>더 보기</Button>
        </div>
      </div>
    </StyledMainContainer>
  );
};
