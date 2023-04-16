// base
import React, { useState } from 'react';

// style
import { StyledGuestbook } from './style';
import { BasicTab } from 'components';

export const Guestbook = () => {
  const [isCurrentTab, setIsCurrentTab] = useState('best');

  const onChangeTab = (e: React.SyntheticEvent, value: string) => {
    setIsCurrentTab(value);
  };

  return (
    <StyledGuestbook>
      <div className="guest-wrapper">
        <div className="guest-wrapper-write"></div>
        <div className="guest-wrapper-tabs">
          <BasicTab
            value={isCurrentTab}
            tabItems={[
              { label: '베스트', value: 'best' },
              { label: '최신순', value: 'new' },
              { label: '오래된순', value: 'old' }
            ]}
            onChange={onChangeTab}
          />
        </div>
      </div>
    </StyledGuestbook>
  );
};
