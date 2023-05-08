// base
import React from 'react';

// style
import { StyledInstaCard } from './style';

// components
import { BlurImage } from 'components';

// libraries
import moment from 'moment';

interface InstaCardProps {
  data: any;
}

export const InstaCard: React.FC<InstaCardProps> = ({ data }) => {
  return (
    <StyledInstaCard>
      <div
        className="insta-wrapper-body-box-middle-top"
        style={{ marginBottom: 36 }}
      >
        <div className="insta-wrapper-body-box-middle-top-header">
          <div className="insta-wrapper-body-box-middle-top-header-img">
            <BlurImage
              src={data.images}
              alt={data.name}
              width={30}
              height={30}
            />
          </div>
          <div className="insta-wrapper-body-box-middle-top-header-text">
            <p>{data.name !== 'undefined' ? data.name : '익명의 게스트'}</p>
            <p>{moment(data.createdAt).format('YYYY-MM-DD, A HH-MM-ss')}</p>
          </div>
        </div>

        <div className="insta-wrapper-body-box-middle-top-content">
          <p>{data.content === 'undefined' ? '' : data.content}</p>
          <div className="insta-wrapper-body-box-middle-top-content-img">
            {data.images && (
              <BlurImage
                src={data.images}
                alt={data.name}
                width={600}
                height={600}
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
        </div>
      </div>
    </StyledInstaCard>
  );
};
