import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

// 회원가입 / 로그인 폼

const AuthFormBlock = styled.div`
  h4 {
    color: ${palette.indigo[10]};
    font-weight: normal;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
`;

// 스타일링된 input
const StyledInput = styled.input`
  background: ${palette.red[0]};
  color: ${palette.indigo[10]};
  font-size: 0.8rem;
  border: none;
  border-bottom: 1px solid ${palette.indigo[10]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: ${palette.indigo[10]};
    border-bottom: 1px solid ${palette.indigo[10]};
  }

  &::placeholder {
    color: ${palette.orange[4]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

// 폼 하단에 로그인 / 회원가입 링크를 보여줌
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.indigo[10]};
    letter-spacing: 2px;
    text-decoration: underline;
    /* &:hover {
    } */
  }
`;

// 버튼 상단 여백
const ButtonWidthMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: 'LOGIN',
  register: 'REGISTER',
};

// 에러 표시
const ErrorMessage = styled.div`
  color: ${palette.red[9]};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h4>{text}</h4>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="ID"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="PASSWORD"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="PASSWORD CHECK"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWidthMarginTop orange fullWidth styled={{ marginTop: '1rem' }}>
          {text}
        </ButtonWidthMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">REGISTER</Link>
        ) : (
          <Link to="/login">LOGIN</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
