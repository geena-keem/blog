import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  color: ${palette.red[7]};
  border: 0.1rem solid ${palette.red[7]};
  font-size: 1rem;
  padding: 0.25rem 1rem;
  cursor: pointer;

  background-color: ${palette.orange[1]};
  &:hover {
    /* color: ${palette.orange[1]}; */
    color: white;
    background: ${palette.red[7]};
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
