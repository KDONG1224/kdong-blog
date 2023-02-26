// base
import React from 'react';

// style
import { StyledGuestbook } from './style';

// components
import { GuestbookCard } from 'components';

// hooks
import { useMedia } from 'hooks';

interface GuestbookProps {
  guestbookLists: any[];
}

export const Guestbook: React.FC<GuestbookProps> = ({ guestbookLists }) => {
  const { isMobile: ismobile } = useMedia();

  console.log(
    'AA : ',
    guestbookLists.sort((a, b) => b.index - a.index).sort((a, b) => b.images)
  );
  return (
    <StyledGuestbook ismobile={ismobile}>
      <div className="guest-wrapper">
        <div className="guest-wrapper-header">
          <h2>방명록</h2>
        </div>
        <div className="guest-wrapper-content">
          {guestbookLists
            .sort((a, b) => b.index - a.index)
            .map((guestbook) => (
              <GuestbookCard key={guestbook.id} guestbook={guestbook} />
            ))}
        </div>
      </div>
    </StyledGuestbook>
  );
};
