import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  /* background: ${palette.red[0]}; */
  background: ${palette.gray[0]};
  /* border-bottom: 2px solid ${palette.orange[4]}; */
  /* border-top: 2px solid ${palette.indigo[10]}; */
  border-bottom: 2px solid ${palette.indigo[10]};
`;

// Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
const Wrapper = styled(Responsive)`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    color: ${palette.orange[4]};
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 4px;
    padding: 4px 8px;

    span {
      color: ${palette.indigo[10]};
    }
  }

  .right {
    display: flex;
    align-items: center;
  }

  .button {
    color: ${palette.indigo[10]};
    background-color: ${palette.orange[4]};
    border: 1px solid ${palette.indigo[10]};
    &:hover {
      color: ${palette.orange[4]};
      background-color: ${palette.indigo[10]};
    }
  }
`;

// 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해준다.
const Spacer = styled.div`
  height: 5rem;
`;

// 로그아웃 버튼
const UserInfo = styled.div`
  color: ${palette.indigo[10]};
  margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            &#123; <span>BLOG</span> &#125;
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button className="button" onClick={onLogout}>
                LOGOUT
              </Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login" className="button">
                LOGIN
              </Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
