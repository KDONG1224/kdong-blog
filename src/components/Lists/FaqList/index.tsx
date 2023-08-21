// base
import React, { useState } from 'react';

// style
import { StyledFaqList } from './style';

// modules
import { MainFaqProps } from 'modules';

// hooks
import { useMedia } from 'hooks';

// libraries
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

interface FaqListProps {
  faqList: MainFaqProps[];
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
        {faqList?.map(({ seq, question, answer }) => (
          <Accordion
            key={seq}
            expanded={isExpanded === seq.toString()}
            onChange={handleChange(seq.toString())}
            className="faq-wrapper-content"
          >
            <AccordionSummary
              id={`${seq}-header`}
              aria-controls={`${seq}-content`}
              expandIcon={<div className="faq-wrapper-content-btn" />}
              className="faq-wrapper-content-summary"
            >
              <div className="faq-wrapper-content-summary-title">
                Q. {question}
              </div>
            </AccordionSummary>
            <AccordionDetails className="faq-wrapper-content-details">
              <div className="faq-wrapper-content-details-desc">
                A. {answer}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </StyledFaqList>
  );
};
