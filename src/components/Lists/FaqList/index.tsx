// base
import React, { useId } from 'react';

// style
import { StyledFaqList } from './style';

// consts
import { ResponseFaqListProps } from 'consts';

// hooks
import { useMedia } from 'hooks';

interface FaqListProps {
  faqList: ResponseFaqListProps[];
}

export const FaqList: React.FC<FaqListProps> = ({ faqList }) => {
  const id = useId();
  const { isMobile } = useMedia();

  return (
    <StyledFaqList ismobile={isMobile}>
      <div className="faq-wrapper">
        {faqList?.map(({ key, title }) => (
          <div className="faq-wrapper-content" key={id + key}>
            <div className="faq-wrapper-content-title">Q. {title}</div>
            <div className="faq-wrapper-content-btn" />
          </div>
        ))}
      </div>
    </StyledFaqList>
  );
};
