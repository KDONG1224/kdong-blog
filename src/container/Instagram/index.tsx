// base
import React, { useState } from 'react';

// style
import { StyledInstargram } from './style';

// components
import { BlurImage } from 'components';

// consts
import { exImg, instaImages } from 'consts';

// modules
import { collapsedState, darkModeState } from 'modules';

// libraires
import { useRecoilValue } from 'recoil';
import { guestbookListsState } from 'modules/guestbook';
import { MainBoard } from 'container/MainBoard';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import moment from 'moment';

interface InstagramProps {
  onClick: () => void;
}

export const Instagram: React.FC<InstagramProps> = ({ onClick }) => {
  const collapsed = useRecoilValue(collapsedState);
  const isDarkMode = useRecoilValue(darkModeState);
  const guestbookLists = useRecoilValue(guestbookListsState);

  const instaInfo = [
    instaImages.INSTA_INFO_1,
    instaImages.INSTA_INFO_2,
    instaImages.INSTA_INFO_3
  ];

  return (
    <StyledInstargram isDarkMode={isDarkMode}>
      <div className="insta-wrapper">
        {/* header */}
        <div className="insta-wrapper-top">
          <span className="insta-wrapper-top-dot" onClick={onClick} />
          <div className="insta-wrapper-top-header">Let's Talk</div>
        </div>

        {/* body */}
        <div className="insta-wrapper-body">
          <div className="insta-wrapper-body-box">
            <div className="insta-wrapper-body-box-top">
              <h2>
                반가워요👋 <br /> 밥값하는 개발자 강동재 입니다.
              </h2>
              {[0, 1, 2].map((num) => (
                <div key={num}>
                  <BlurImage
                    src={instaInfo[num]}
                    alt=""
                    width={348}
                    height={448}
                    layout="fixed"
                    objectFit="cover"
                    style={{ borderRadius: 20 }}
                  />
                </div>
              ))}
            </div>

            <div className="insta-wrapper-body-box-middle">
              <h2>방명록</h2>
              {guestbookLists &&
                [...guestbookLists]
                  .sort((a, b) => b.index - a.index)
                  .map((guestbook) => {
                    if (!guestbook.images) return;

                    return (
                      <div
                        className="insta-wrapper-body-box-middle-top"
                        key={guestbook.id}
                        style={{ marginBottom: 36 }}
                      >
                        <div className="insta-wrapper-body-box-middle-top-header">
                          <div className="insta-wrapper-body-box-middle-top-header-img">
                            {guestbook.images ? (
                              <BlurImage
                                src={guestbook.images}
                                alt={guestbook.name}
                                width={30}
                                height={30}
                                round
                              />
                            ) : (
                              <Avatar
                                style={{
                                  backgroundColor: '#87d068',
                                  width: 30,
                                  height: 30
                                }}
                                icon={<UserOutlined style={{ fontSize: 16 }} />}
                              />
                            )}
                          </div>
                          <div className="insta-wrapper-body-box-middle-top-header-text">
                            <p>
                              {guestbook.name !== 'undefined'
                                ? guestbook.name
                                : '익명의 게스트'}
                            </p>
                            <p>
                              {moment(guestbook.createdAt).format(
                                'YYYY-MM-DD, A HH-MM-ss'
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="insta-wrapper-body-box-middle-top-content">
                          <p>
                            {guestbook.content === 'undefined'
                              ? ''
                              : guestbook.content}
                          </p>
                          <div className="insta-wrapper-body-box-middle-top-content-img">
                            {guestbook.images && (
                              <BlurImage
                                src={guestbook.images}
                                alt={guestbook.name}
                                width={600}
                                height={600}
                                objectFit="cover"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </StyledInstargram>
  );
};
