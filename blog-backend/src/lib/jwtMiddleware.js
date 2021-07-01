import jwt from 'jsonwebtoken';
import User from '../models/user';

// 사용자의 토큰을 확인 후 검증하는 작업
const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');
  if (!token) return next(); // 토큰이 없음
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    };
    /*
    console.log(decoded);
    {
      _id: '60de0182e56d2029a419a54d',
      username: 'keemgeena',
      iat: 1625165304, => iat은 토큰이 언제 만들어졌는지 알려주는 값
      exp: 1625770104  => exp는 언제 만료되는지 알려주는 값
    }
    */

    // 토큰의 남은 유효 기간이 3.5일 미만이면 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id);
      const token = user.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
        httpOnly: true,
      });
    }
    return next();
  } catch (e) {
    // 토큰 검증 실패
    return next();
  }
};

export default jwtMiddleware;
