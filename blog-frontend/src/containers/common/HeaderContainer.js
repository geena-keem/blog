import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

// 로그인 상태 보여주기
const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  // 로그아웃
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
