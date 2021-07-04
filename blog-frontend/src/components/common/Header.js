import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: ${palette.red[7]};
`;

// Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
const Wrapper = styled(Responsive)`
  height: 5rem;
  display: flex;
  align-items: center;

  justify-content: space-between;

  .logo {
    color: ${palette.orange[1]};
    font-size: 1.125rem;
    letter-spacing: 4px;
    border: 8px double ${palette.orange[1]};
    padding: 4px 8px;
  }

  .right {
    display: flex;
    align-items: center;
  }

  .button {
    color: ${palette.orange[1]};
    background-color: ${palette.red[7]};
    border: 1px solid ${palette.orange[1]};
    &:hover {
      color: ${palette.red[7]};
      background-color: ${palette.orange[1]};
    }
  }
`;

// 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해준다.
const Spacer = styled.div`
  height: 5rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            BLOG
          </Link>
          <div className="right">
            <Button to="/login" className="button">
              LOGIN
            </Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
