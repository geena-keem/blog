import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  color: ${palette.red[7]};
  border: 0.1rem solid ${palette.red[7]};
  padding: 0.25rem 1rem;
  cursor: pointer;
  letter-spacing: 2px;

  background-color: ${palette.orange[1]};
  &:hover {
    color: ${palette.orange[1]};
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
        color: ${palette.orange[1]};
        background: ${palette.red[7]};
      }
    `}
  &:disabled {
    background-color: ${palette.orange[1]};
    color: ${palette.red[7]};
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} orange={props.orange ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
