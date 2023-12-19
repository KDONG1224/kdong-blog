// base
import React, { useEffect, useState } from 'react';

// style
import { StyledEditorViewText } from './style';

interface EditorViewTextProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

export const EditorViewText: React.FC<EditorViewTextProps> = ({
  content,
  ...props
}) => {
  const [isContent, setIsContent] = useState('');

  useEffect(() => {
    if (!content) return;

    setIsContent(content);
  }, [content]);

  return (
    <StyledEditorViewText {...props}>
      <div
        className="view-wrapper"
        dangerouslySetInnerHTML={{ __html: isContent }}
      />
    </StyledEditorViewText>
  );
};
