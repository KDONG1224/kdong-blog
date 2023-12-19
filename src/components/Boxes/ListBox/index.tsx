// base
import React from 'react';

// style
import { StyledListBox } from './style';

// components
import { BasicSwiper, CheckCard } from 'components';

// hooks
import { useMedia } from 'hooks';

// libraries
import { SwiperSlide } from 'swiper/react';

interface ListBoxProps {
  headerTitle: string;
  subHeaderTitle: string;
  lists: any[];
  type?: 'check' | 'polygon' | 'image';
  delay?: number;
  onClickMore: () => void;
  onClickCard: (id: string) => void;
}

export const ListBox: React.FC<ListBoxProps> = ({
  headerTitle,
  subHeaderTitle,
  lists,
  type = 'check',
  delay = 2500,
  onClickMore,
  onClickCard
}) => {
  const { isMobile } = useMedia();

  const handleClickMore = () => {
    if (!onClickMore) return;

    onClickMore();
  };

  const handleClickDetail = (id: string) => {
    onClickCard(id);
  };

  return (
    <StyledListBox $ismobile={isMobile}>
      <div className="list-wrapper">
        <div className="list-wrapper-title">
          <div className="list-wrapper-title-left">
            <h2>{headerTitle}</h2>
            <p>{subHeaderTitle}</p>
          </div>
          <div className="list-wrapper-title-right" onClick={handleClickMore}>
            더보기 +
          </div>
        </div>
        <div className="list-wrapper-contents">
          <BasicSwiper
            className="list-wrapper-contents-swiper"
            autoplay={{
              delay: delay,
              disableOnInteraction: false
            }}
          >
            {(lists || []).map((data, idx) => (
              <SwiperSlide key={idx}>
                <CheckCard
                  data={data}
                  type={type}
                  onClick={handleClickDetail}
                />
              </SwiperSlide>
            ))}
          </BasicSwiper>
        </div>
      </div>
    </StyledListBox>
  );
};
