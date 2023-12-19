// base
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// styles
import {
  StyledAddImageWrap,
  StyledCloseOutlined,
  StyledGuestbookModal,
  StyledGuestbooks,
  StyledPlusOutlined
} from './style';

// containers
import { SearchBox } from 'containers';

// components
import { BasicButton, BlurImage, GuestbookCard } from 'components';

// modules
import { BannerImageProps } from 'modules';
import {
  CreateGuestbookProps,
  GuestbookApi,
  QUERY_GUESTBOOK_CREATE,
  QUERY_GUESTBOOK_LISTS
} from 'modules/guestbook';

// libraries
import { RcFile } from 'antd/lib/upload';
import { useForm } from 'antd/lib/form/Form';
import { CommentOutlined } from '@ant-design/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Descriptions, FloatButton, Form, Input, Upload, message } from 'antd';
import nProgress from 'nprogress';

interface PRcFile extends RcFile {
  sequence: number;
  originalname: string;
  mimetype: string;
  location: string;
  id: string | null;
}

interface GuestbooksProps {}

export const Guestbooks: React.FC<GuestbooksProps> = () => {
  const [isWriteModal, setIsWriteModal] = useState<boolean>(false);
  const [guestbookLists, setGuestbookLists] = useState<any[]>([]);
  const [guestImageLists, setGuestImageLists] = useState<
    BannerImageProps[] | PRcFile[]
  >([]);

  const [form] = useForm();
  const queryClient = useQueryClient();

  const guestbookApi = useMemo(() => {
    return new GuestbookApi();
  }, []);

  const { data: resultLists } = useQuery(
    [QUERY_GUESTBOOK_LISTS],
    async () => {
      nProgress.start();
      return await guestbookApi.getClientAllGuestbook();
    },
    {
      select: (data) => {
        return data.result.guestbooks;
      },
      onSuccess: () => nProgress.done(),
      onError: () => nProgress.done()
    }
  );

  const { mutateAsync: createGuestbook } = useMutation(
    [QUERY_GUESTBOOK_CREATE],
    async (data: FormData) => {
      return await guestbookApi.createGuestbook(data);
    },
    {
      onSuccess: () => {
        setGuestImageLists([]);
        setIsWriteModal(false);
        form.resetFields();

        return queryClient.invalidateQueries([QUERY_GUESTBOOK_LISTS]);
      }
    }
  );

  const dataSource = useMemo(() => {
    if (!guestbookLists) return [];

    return guestbookLists;
  }, [guestbookLists]);

  const onInitValue = useCallback(() => {
    if (!resultLists) return;

    setGuestbookLists(resultLists);
  }, [resultLists]);

  const onVisibleWriteModal = () => {
    setIsWriteModal((prev) => {
      if (prev) {
        form.resetFields();
      }

      return !prev;
    });

    setGuestImageLists([]);
  };

  const handleUpload = (info: any) => {
    console.log('== info == : ', info);

    if (info.file.status === 'error') {
      return false;
    }

    const file = info.file;
    const blob = new Blob([file.originFileObj], {
      type: file.type
    });
    const blobUrl = URL.createObjectURL(blob);

    const lastItem = guestImageLists[guestImageLists.length - 1];

    const newFile = {
      ...file,
      sequence: lastItem ? lastItem.sequence + 1 : 1,
      originalname: file.name,
      mimetype: file.type,
      location: blobUrl
    };

    setGuestImageLists([...guestImageLists, newFile]);
  };

  const handleRemove = (id: string, index: number) => {
    const bannerImages = (guestImageLists as BannerImageProps[]).filter(
      (_, idx) => idx !== index
    );

    setGuestImageLists(bannerImages);
  };

  const beforeUpload = (file: RcFile) => {
    if (file.size > 10000000) {
      message.info('파일당 10MB를 초과할 수 없습니다.');

      return false;
    }

    return true;
  };

  const onFinish = async (values: CreateGuestbookProps) => {
    try {
      if (!values.guestName) {
        message.error('이름을 입력해주세요.');

        return;
      }

      if (!values.content) {
        message.error('내용을 입력해주세요.');

        return;
      }

      if (!values.guestPassword) {
        message.error('비밀번호를 입력해주세요.');

        return;
      }

      const formData = new FormData();

      if (guestImageLists.length > 0) {
        guestImageLists.forEach((list: any) => {
          formData.append('guestbookImages', list.originFileObj);
        });
      }

      formData.append('guestName', values.guestName);
      formData.append('content', values.content);
      formData.append('guestPassword', values.guestPassword);

      await createGuestbook(formData);
    } catch (e) {
      console.log('== e == : ', e);
    }
  };

  useEffect(() => {
    onInitValue();
  }, [onInitValue]);

  return (
    <>
      <StyledGuestbooks>
        <SearchBox
          title="방명록"
          // filters={[
          //   {
          //     key: 'order',
          //     options: [
          //       {
          //         key: 'order__desc',
          //         label: '최근 등록순',
          //         value: 'DESC'
          //       },
          //       {
          //         key: 'order__asc',
          //         label: '오래된순',
          //         value: 'ASC'
          //       }
          //     ],
          //     placeholder: '최근 등록순',
          //     onChange: (value: string) => console.log(value)
          //   }
          // ]}
        />
        <div className="books-wrapper">
          {dataSource &&
            dataSource.map((item) => (
              <GuestbookCard key={item.id} data={item} />
            ))}
        </div>

        <FloatButton
          icon={<CommentOutlined />}
          shape="square"
          onClick={onVisibleWriteModal}
        />
      </StyledGuestbooks>

      <StyledGuestbookModal
        open={isWriteModal}
        centered
        width={800}
        title="방명록 작성하기"
        onCancel={onVisibleWriteModal}
        footer={false}
      >
        <div className="create-wrapper">
          <Form className="create-wrapper-form" form={form} onFinish={onFinish}>
            <Descriptions column={1} bordered size="small">
              <Descriptions.Item label="이름" span={1}>
                <Form.Item name="guestName">
                  <Input
                    maxLength={12}
                    placeholder="이름 또는 닉네임을 입력해주세요."
                  />
                </Form.Item>{' '}
              </Descriptions.Item>

              <Descriptions.Item label="비밀번호" span={1}>
                <Form.Item name="guestPassword">
                  <Input
                    maxLength={8}
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                  />
                </Form.Item>
              </Descriptions.Item>

              <Descriptions.Item label="내용" span={1}>
                <Form.Item name="content" style={{ height: 200 }}>
                  <Input.TextArea
                    placeholder="내용을 입력해주세요."
                    maxLength={100}
                    showCount
                  />
                </Form.Item>
              </Descriptions.Item>

              <Descriptions.Item label="첨부사진" span={1}>
                <div className="guest-image-box">
                  <div className="image-lists">
                    {guestImageLists.map((list, idx) => (
                      <div className="image-lists-box" key={list.sequence}>
                        <BlurImage src={list.location} alt="upload_image" />
                        <StyledCloseOutlined
                          onClick={() => handleRemove(list.id as string, idx)}
                        />
                      </div>
                    ))}
                  </div>
                  {guestImageLists.length < 5 && (
                    <Upload
                      listType="picture"
                      showUploadList={false}
                      maxCount={5}
                      fileList={guestImageLists as any[]}
                      beforeUpload={beforeUpload}
                      onChange={handleUpload}
                      customRequest={() => true}
                    >
                      <StyledAddImageWrap>
                        <StyledPlusOutlined />
                      </StyledAddImageWrap>
                    </Upload>
                  )}
                </div>
              </Descriptions.Item>
            </Descriptions>

            <div className="create-wrapper-form-btns">
              <BasicButton
                className="cancle"
                btnText="취소"
                onClick={onVisibleWriteModal}
              />
              <BasicButton btnText="등록" htmlType="submit" />
            </div>
          </Form>
        </div>
      </StyledGuestbookModal>
    </>
  );
};
