import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  color: ${palette.red[7]};
  border: 0.1rem solid ${palette.red[7]};
  padding: 0.25rem 1rem;
  cursor: pointer;
  letter-spacing: 2px;

  background-color: ${palette.orange[1]};
  &:hover {
    /* color: ${palette.orange[1]}; */
    color: white;
    background: ${palette.red[7]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
    `}

  ${(props) =>
    props.orange &&
    css`
      background: ${palette.orange[1]};
      &:hover {
        color: white;
        background: ${palette.red[7]};
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
