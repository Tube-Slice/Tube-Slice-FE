import React, { useState } from 'react';

import styles from './styles';

import { CommentDataProps } from 'types/postDetailPage/postDetailPage';

import BasicProfile from '@assets/common/BasicProfile.png';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../deleteModal/deleteModal';
import { deleteComment } from '@server/api/comment/comment';

const CommentDataContainer: React.FC<CommentDataProps> = ({ comments }) => {
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);
  const [selectedCommentId, setSelectedCommentId] = useState<number>(0);

  const navigate = useNavigate();

  const handleNicknameClick = (userId: number) => {
    navigate(`/mypage/${userId}`);
  };

  const handleModalOpen = (commentId: number) => {
    setSelectedCommentId(commentId);
    setIsDeleteMode(true);
  };

  const handleCancel = () => {
    setIsDeleteMode(false);
  };

  const handleDeleteComment = (commentId: number) => {
    deleteComment(commentId);
    setIsDeleteMode(false);
  };

  return (
    <>
      <styles.Container>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <styles.Comment key={comment.commentId}>
              <styles.UpperWrapper>
                <styles.WriterInfo>
                  <styles.ProfileImage
                    src={
                      comment.user.profileUrl
                        ? comment.user.profileUrl
                        : BasicProfile
                    }
                  />
                  <styles.NicknameTime>
                    <styles.Nickname
                      onClick={() => handleNicknameClick(comment.user.userId)}
                    >
                      {comment.user.nickname}
                    </styles.Nickname>

                    <styles.CreatedAt>{comment.createdAt}</styles.CreatedAt>
                  </styles.NicknameTime>
                </styles.WriterInfo>
                {comment.user.isMine && (
                  <styles.OptionContainer>
                    <styles.Option>수정</styles.Option>
                    <styles.Option
                      onClick={() => handleModalOpen(comment.commentId)}
                    >
                      삭제
                    </styles.Option>
                  </styles.OptionContainer>
                )}
              </styles.UpperWrapper>
              <div>{comment.content}</div>
            </styles.Comment>
          ))
        ) : (
          <div>해당 게시물의 댓글이 존재하지 않습니다.</div>
        )}
      </styles.Container>

      {isDeleteMode && (
        <DeleteModal
          commentId={selectedCommentId}
          handleCancel={handleCancel}
          handleDeleteComment={handleDeleteComment}
        />
      )}
    </>
  );
};

export default CommentDataContainer;
