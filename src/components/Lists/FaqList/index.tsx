// base
import React, { useState } from 'react';

// style
import { StyledFaqList } from './style';

// consts
import { ResponseFaqListProps } from 'consts';

// hooks
import { useMedia } from 'hooks';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

interface FaqListProps {
  faqList: ResponseFaqListProps[];
}

export const FaqList: React.FC<FaqListProps> = ({ faqList }) => {
  const [isExpanded, setIsExpanded] = useState<string | false>(false);

  const { isMobile } = useMedia();

  const handleChange =
    (panel: string) => (e: React.SyntheticEvent, newExpanded: boolean) => {
      setIsExpanded(newExpanded ? panel : false);
    };

  return (
    <StyledFaqList ismobile={isMobile}>
      <div className="faq-wrapper">
        {faqList?.map(({ key, title, desc }) => (
          <Accordion
            key={key}
            expanded={isExpanded === key.toString()}
            onChange={handleChange(key.toString())}
            className="faq-wrapper-content"
          >
            <AccordionSummary
              id={`${key}-header`}
              aria-controls={`${key}-content`}
              expandIcon={<div className="faq-wrapper-content-btn" />}
              className="faq-wrapper-content-summary"
            >
              <div className="faq-wrapper-content-summary-title">
                Q. {title}
              </div>
            </AccordionSummary>
            <AccordionDetails className="faq-wrapper-content-details">
              <div className="faq-wrapper-content-details-desc">A. {desc}</div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </StyledFaqList>
  );
};
