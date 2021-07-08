import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModal from './AskRemoveModal';

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionsButton = styled.button`
  padding: 0.25rem 0.5rem;
  color: ${palette.indigo[10]};
  background-color: ${palette.orange[4]};
  border: 1px solid ${palette.indigo[10]};
  font-size: 0.875rem;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    color: ${palette.orange[4]};
    background-color: ${palette.indigo[10]};
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <PostActionButtonsBlock>
        <ActionsButton onClick={onEdit}>MOD</ActionsButton>
        <ActionsButton onClick={onRemoveClick}>DEL</ActionsButton>
      </PostActionButtonsBlock>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default PostActionButtons;
