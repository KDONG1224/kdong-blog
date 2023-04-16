// base
import React from 'react';

// style
import { StyledTagText } from './style';

interface TagTextProps {
  text: string;
}

export const TagText: React.FC<TagTextProps> = ({ text }) => {
  return <StyledTagText>{text}</StyledTagText>;
};
