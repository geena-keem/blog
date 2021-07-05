import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 1rem;
  }
`;

// TagBox에서 사용하는 버튼과 일하는 높이로 설정한 후 서로 간의 여백 지정
const StyledButton = styled(Button)`
  background-color: ${palette.orange[1]};
  text-align: center;
  height: 2.125rem;
  & + & {
    margin-left: 1rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton orange onClick={onPublish}>
        POSTING
      </StyledButton>
      <StyledButton onClick={onCancel}>CANCEL</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
