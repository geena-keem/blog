import React from 'react';
import { Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>BLOG</title>
      </Helmet>
      <Route component={RegisterPage} path="/register" />
      <Route component={LoginPage} path="/login" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={PostListPage} path={['/@:username', '/']} exact />
    </>
  );
};

export default App;
