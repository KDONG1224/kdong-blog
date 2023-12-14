// base
import React, { useState } from 'react';

// style
import { StyledFaqList } from './style';

// modules
import { FaqListsProps } from 'modules';

// hooks
import { useMedia } from 'hooks';

// libraries
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

interface FaqListStateProps {
  faqList: FaqListsProps[];
}

export const FaqList: React.FC<FaqListStateProps> = ({ faqList }) => {
  const [isExpanded, setIsExpanded] = useState<string | false>(false);

  const { isMobile } = useMedia();

  const handleChange =
    (panel: string) => (e: React.SyntheticEvent, newExpanded: boolean) => {
      setIsExpanded(newExpanded ? panel : false);
    };

  return (
    <StyledFaqList ismobile={isMobile}>
      <div className="faq-wrapper">
        {faqList?.map(({ sequence, question, answer, expose }) => {
          if (!expose) return null;

          return (
            <Accordion
              key={sequence}
              expanded={isExpanded === sequence.toString()}
              onChange={handleChange(sequence.toString())}
              className="faq-wrapper-content"
            >
              <AccordionSummary
                id={`${sequence}-header`}
                aria-controls={`${sequence}-content`}
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
          );
        })}
      </div>
    </StyledFaqList>
  );
};
