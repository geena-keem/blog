import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

// 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트

// 화면 전체를 채움
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 박스
const WhiteBox = styled.div`
  .logo-area {
    color: ${palette.red[7]};
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-size: 1.25rem;
    /* font-weight: bold; */
    letter-spacing: 4px;
  }
  border: 1px solid ${palette.red[7]};
  padding: 2rem;
  width: 360px;
  background: white;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">BLOG</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
