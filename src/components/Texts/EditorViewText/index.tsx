// base
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledEditorViewText } from './style';

// components
import { BasicButton, BlurImage, CommentForm } from 'components';

// modules
import { ArticleListsProps } from 'modules';

// utils
import { removeHtmlTags } from 'utils';

// consts
import { ROUTE_REFERENCE } from 'consts';

interface EditorViewTextProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  prevContent?: ArticleListsProps;
  nextContent?: ArticleListsProps;
}

export const EditorViewText: React.FC<EditorViewTextProps> = ({
  content,
  prevContent,
  nextContent,
  ...props
}) => {
  const [isContent, setIsContent] = useState('');

  const router = useRouter();

  const onClickContent = (id: string) => {
    router.push(`${ROUTE_REFERENCE}/${id}`);
  };

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

      <div className="view-wrapper-bottom">
        <div className="view-wrapper-bottom-article">
          {prevContent && (
            <div
              className="view-wrapper-bottom-article-box"
              onClick={() => onClickContent(prevContent.id)}
            >
              <div className="view-wrapper-bottom-article-box-body">
                <div className="view-wrapper-bottom-article-box-body-title">
                  <span>이전글 :</span>
                  <span>{prevContent.title}</span>
                </div>
                <div className="view-wrapper-bottom-article-box-body-content line-two">
                  {removeHtmlTags(prevContent.content)}
                </div>
              </div>
              <div className="view-wrapper-bottom-article-box-img">
                <BlurImage
                  src={prevContent.thumbnails[0].location}
                  alt={prevContent.title}
                />
              </div>
            </div>
          )}
        </div>

        <div className="view-wrapper-bottom-article">
          {nextContent && (
            <div
              className="view-wrapper-bottom-article-box"
              onClick={() => onClickContent(nextContent.id)}
            >
              <div className="view-wrapper-bottom-article-box-body">
                <div className="view-wrapper-bottom-article-box-body-title">
                  <span>다음글 :</span>
                  <span>{nextContent.title}</span>
                </div>
                <div className="view-wrapper-bottom-article-box-body-content line-two">
                  {removeHtmlTags(nextContent.content)}
                </div>
              </div>
              <div className="view-wrapper-bottom-article-box-img">
                <BlurImage
                  src={nextContent.thumbnails[0].location}
                  alt={nextContent.title}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledEditorViewText>
  );
};
