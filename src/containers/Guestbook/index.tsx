/* eslint-disable @typescript-eslint/no-unused-vars */
// base
import React, { useState } from 'react';

// style
import { StyledGuestbook } from './style';

export const Guestbook = () => {
  const [isCurrentTab, setIsCurrentTab] = useState('best');

  const onChangeTab = (e: React.SyntheticEvent, value: string) => {
    setIsCurrentTab(value);
  };

  return (
    <StyledGuestbook>
      <div className="guest-wrapper">
        <div className="guest-wrapper-write"></div>
        <div className="guest-wrapper-tabs"></div>
      </div>
    </StyledGuestbook>
  );
};
