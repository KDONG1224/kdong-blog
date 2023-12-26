// base
import React, { useMemo } from 'react';

// styles
import { StyledReferenceDetail } from './style';

// components
import { CommentBox, CommentForm, EditorViewText } from 'components';

// modules
import {
  BaseComment,
  CommentApi,
  CreateCommentFormProps,
  PrivateCommentProps,
  QUERY_COMMENT,
  // QUERY_COMMENT_BY_ID,
  QUERY_CREATE_COMMENT,
  // QUERY_DELETE_COMMENT,
  // QUERY_UPDATE_COMMENT,
  ResponseArticleDetailResultProps,
  ResponseComment
  // ResponseUpdateComment,
  // UpdateCommentFormProps
} from 'modules';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import nProgress from 'nprogress';
import { AxiosError } from 'axios';

interface ReferenceDetailProps {
  article: ResponseArticleDetailResultProps;
}

export const ReferenceDetail: React.FC<ReferenceDetailProps> = ({
  article
}) => {
  // const [isPrivateId, setIsPrivateId] = useState<string>('');
  const queryClient = useQueryClient();

  const currentPost = useMemo(() => {
    return article.currentPost;
  }, [article]);

  const prevPost = useMemo(() => {
    if (!article || !article.prevPost) return;

    return article.prevPost;
  }, [article]);

  const nextPost = useMemo(() => {
    if (!article || !article.nextPost) return;

    return article.nextPost;
  }, [article]);

  const commentApi = useMemo(() => {
    return new CommentApi();
  }, []);

  const { data: resultLists } = useQuery<
    ResponseComment,
    AxiosError,
    BaseComment[]
  >(
    [QUERY_COMMENT, nProgress],
    async () => {
      return await commentApi.getComments(currentPost.id);
    },
    {
      select: (data) => {
        return data.result.comments;
      }
    }
  );

  // const { data: resultById } = useQuery<
  //   ResponseUpdateComment,
  //   AxiosError,
  //   BaseComment
  // >(
  //   [QUERY_COMMENT_BY_ID, isPrivateId],
  //   async () => {
  //     return await commentApi.getCommentById(currentPost.id, isPrivateId);
  //   },
  //   {
  //     select: (data) => {
  //       return data.result.comment;
  //     }
  //   }
  // );

  const commentLists = useMemo(() => {
    if (!resultLists) return [];

    return resultLists;
  }, [resultLists]);

  const { mutateAsync: createComment, isLoading } = useMutation(
    [QUERY_CREATE_COMMENT],
    async (values: CreateCommentFormProps) => {
      nProgress.start();

      return await commentApi.createComment(currentPost.id, values);
    },
    {
      onSuccess: () => {
        nProgress.done();
        return queryClient.invalidateQueries([QUERY_COMMENT]);
      },
      onError: (error: any) => {
        console.log('== error == : ', error);
        nProgress.done();
      }
    }
  );

  // const { mutateAsync: updateComment } = useMutation(
  //   [QUERY_UPDATE_COMMENT],
  //   async (values: UpdateCommentFormProps) => {
  //     nProgress.start();

  //     return await commentApi.updateComment(currentPost.id, values.id, values);
  //   },
  //   {
  //     onSuccess: () => {
  //       // queryClient.invalidateQueries(QUERY_GET_ARTICLE_DETAIL);
  //       nProgress.done();
  //     },
  //     onError: (error: any) => {
  //       console.log('== error == : ', error);
  //       nProgress.done();
  //     }
  //   }
  // );

  // const { mutateAsync: deleteComment } = useMutation(
  //   [QUERY_DELETE_COMMENT],
  //   async (values: UpdateCommentFormProps) => {
  //     nProgress.start();

  //     return await commentApi.deleteComment(currentPost.id, values.id, values);
  //   },
  //   {
  //     onSuccess: () => {
  //       // queryClient.invalidateQueries(QUERY_GET_ARTICLE_DETAIL);
  //       nProgress.done();
  //     },
  //     onError: (error: any) => {
  //       console.log('== error == : ', error);
  //       nProgress.done();
  //     }
  //   }
  // );

  const onClickPrivate = (
    values: PrivateCommentProps,
    comment: BaseComment
  ) => {
    console.log('== onClickPrivate == : ', values);
    console.log('== onClickPrivate == : ', comment);
  };

  const onSubmit = (values: CreateCommentFormProps) => {
    createComment(values);
  };

  return (
    <StyledReferenceDetail>
      <div className="detail-wrapper">
        <div className="detail-wrapper-content">
          <EditorViewText
            content={currentPost.content}
            prevContent={prevPost}
            nextContent={nextPost}
          />
        </div>
        <div className="detail-wrapper-comment">
          <div className="detail-wrapper-comment-list">
            {commentLists.map((comment) => (
              <CommentBox
                key={comment.id}
                data={comment}
                onClickPrivate={(values) => onClickPrivate(values, comment)}
              />
            ))}
          </div>
          <CommentForm onSubmit={onSubmit} isSubmit={isLoading} />
        </div>
      </div>
    </StyledReferenceDetail>
  );
};
