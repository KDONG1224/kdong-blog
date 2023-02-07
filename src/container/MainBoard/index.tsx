// base
import React, { useEffect, useMemo, useState } from 'react';
// style
import { StyledMainBoard } from './style';

// components
import { HomeBoard, MainForm } from 'components';

// modules
import { GuestbookApi } from 'modules/guestbook';

// consts
import { QUERY_GUESTBOOK, QUERY_GUESTBOOK_CREATE } from 'consts';

// libraries
import nProgress from 'nprogress';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface MainBoardProps {
  datas: any[];
}

export const MainBoard: React.FC<MainBoardProps> = ({ datas }) => {
  const queryClient = useQueryClient();

  const [boardLists, setBoardLists] = useState<any[]>(datas);

  const guestbookApi = useMemo(() => {
    return new GuestbookApi();
  }, []);

  const getGuestbook = () => {
    return guestbookApi.getAllGuestbookClient();
  };

  const createGuestbook = (data: FormData) => {
    return guestbookApi.createGuestbook(data);
  };

  const { data } = useQuery(
    [QUERY_GUESTBOOK, nProgress],
    () => getGuestbook(),
    {
      select: (data) => data
    }
  );

  const { mutate: createGb } = useMutation<FormData, unknown, any, any>(
    (values) => createGuestbook(values),
    {
      onMutate: async () => {
        await queryClient.cancelQueries([QUERY_GUESTBOOK_CREATE]);
        nProgress.start();
      },
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_GUESTBOOK_CREATE]);

        nProgress.done();
        getGuestbook();
      },
      onError: (_, __, context) => {
        queryClient.setQueryData([QUERY_GUESTBOOK_CREATE], context.prev);
      }
    }
  );

  useEffect(() => {
    setBoardLists(data);
  }, [data]);

  return (
    <StyledMainBoard>
      <div className="board-wrapper">
        <div className="board-wrapper-top">
          <MainForm onSubmit={createGb} />
        </div>
        <div className="board-wrapper-body">
          {boardLists &&
            boardLists
              // .sort((a: any, b: any) => b.index - a.index)
              .map((data: any) => (
                <HomeBoard key={data.id} data={data.readOnlyData} />
              ))}
        </div>
      </div>
    </StyledMainBoard>
  );
};
