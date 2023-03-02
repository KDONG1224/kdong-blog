// base
import React, { useEffect, useMemo, useState } from 'react';

// style
import { StyledGuestbook } from './style';

// components
import { GuestbookCard, GuestbookForm } from 'components';

// hooks
import { useMedia } from 'hooks';

// consts
import { QUERY_GUESTBOOK, QUERY_GUESTBOOK_CREATE } from 'consts';

// modules
import { GuestbookApi } from 'modules/guestbook';

// libraries
import { Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import nProgress from 'nprogress';

interface GuestbookProps {
  guestbookLists: any[];
}

export const Guestbook: React.FC<GuestbookProps> = ({ guestbookLists }) => {
  const { isMobile: ismobile } = useMedia();
  const [form] = useForm();
  const queryClient = useQueryClient();

  const [datas, setDatas] = useState(() => [...guestbookLists]);

  const [isRow_1, setIsRow_1] = useState<any[]>([]);
  const [isRow_2, setIsRow_2] = useState<any[]>([]);
  const [isRow_3, setIsRow_3] = useState<any[]>([]);

  const [visible, setVisible] = useState(false);

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
        handleClose();
        getGuestbook();
      },
      onError: (_, __, context) => {
        queryClient.setQueryData([QUERY_GUESTBOOK_CREATE], context.prev);
      }
    }
  );

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setDatas(data);
  }, [data]);

  useEffect(() => {
    if (!datas) return;

    let division = datas.length / 3;
    let result: any[] = [];

    for (let i = 0; i < datas.length; i += division) {
      result.push(datas.slice(i, i + division));
    }

    setIsRow_1(result[0]);
    setIsRow_2(result[1]);
    setIsRow_3(result[2]);
  }, [datas]);

  return (
    <>
      <StyledGuestbook ismobile={ismobile}>
        <div className="guest-wrapper">
          <div className="guest-wrapper-header">
            <h2>방명록</h2>
          </div>

          <div className="guest-wrapper-write">
            <Button onClick={handleOpen}>작성하기</Button>
          </div>

          <div className="guest-wrapper-content">
            {ismobile &&
              datas
                .sort((a, b) => b.index - a.index)
                .map((guestbook) => (
                  <GuestbookCard key={guestbook.id} guestbook={guestbook} />
                ))}
            {!ismobile && (
              <>
                <div className="guest-wrapper-content-cards">
                  {isRow_3
                    .sort((a, b) => b.index - a.index)
                    .map((guestbook) => (
                      <GuestbookCard key={guestbook.id} guestbook={guestbook} />
                    ))}
                </div>
                <div className="guest-wrapper-content-cards">
                  {isRow_2
                    .sort((a, b) => b.index - a.index)
                    .map((guestbook) => (
                      <GuestbookCard key={guestbook.id} guestbook={guestbook} />
                    ))}
                </div>
                <div className="guest-wrapper-content-cards">
                  {isRow_1
                    .sort((a, b) => b.index - a.index)
                    .map((guestbook) => (
                      <GuestbookCard key={guestbook.id} guestbook={guestbook} />
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </StyledGuestbook>
      <GuestbookForm
        open={visible}
        handleCreateClose={handleClose}
        onSubmit={createGb}
      />
    </>
  );
};
