const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    // 로그인 상태가 아닐 경우
    ctx.status = 401; // Unauthorized
    return;
  }
  return next();
};

export default checkLoggedIn;
