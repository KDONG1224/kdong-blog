// base
import React from 'react';

// style
import { StyledListBox } from './style';

// components
import { BasicSwiper, CheckCard } from 'components';

// consts
import { RecommandListProps } from 'consts';

// hooks
import { useMedia } from 'hooks';

// libraries
import { SwiperSlide } from 'swiper/react';

interface ListBoxProps {
  headerTitle: string;
  subHeaderTitle: string;
  lists: RecommandListProps[];
  type?: 'check' | 'polygon' | 'image';
}

export const ListBox: React.FC<ListBoxProps> = ({
  headerTitle,
  subHeaderTitle,
  lists,
  type = 'check'
}) => {
  const { isMobile } = useMedia();
  return (
    <StyledListBox ismobile={isMobile}>
      <div className="list-wrapper">
        <div className="list-wrapper-title">
          <div className="list-wrapper-title-left">
            <h2>{headerTitle}</h2>
            <p>{subHeaderTitle}</p>
          </div>
          <div className="list-wrapper-title-right">더보기 +</div>
        </div>
        <div className="list-wrapper-contents">
          <BasicSwiper
            className="list-wrapper-contents-swiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            {lists?.map((data) => (
              <SwiperSlide key={data.key}>
                <CheckCard data={data} type={type} />
              </SwiperSlide>
            ))}
          </BasicSwiper>
        </div>
      </div>
    </StyledListBox>
  );
};
