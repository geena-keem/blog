import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  color: ${palette.indigo[10]};
  border: 0.1rem solid ${palette.indigo[10]};
  padding: 0.25rem 1rem;
  cursor: pointer;
  letter-spacing: 2px;

  background-color: ${palette.orange[4]};
  &:hover {
    color: ${palette.orange[4]};
    background: ${palette.indigo[10]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
    `}

  ${(props) =>
    props.indigo &&
    css`
      background: ${palette.orange[4]};
      &:hover {
        background: ${palette.indigo[10]};
      }
    `}
  &:disabled {
    background-color: ${palette.orange[4]};
    color: ${palette.indigo[10]};
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
    <StyledLink {...props} indigo={props.indigo ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
