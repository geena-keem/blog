import React from 'react';
import { Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';

const App = () => {
  return (
    <>
      <Route component={RegisterPage} path="/register" />
      <Route component={LoginPage} path="/login" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path={['/@:username', '/']} exact />
      <Route component={PostListPage} path="/@:username/:postId" />
    </>
  );
};

export default App;
