import Joi from 'joi';
import User from '../../models/user';

/*
회원가입
  POST /api/auth/register
  {
    username: 'keemgeena',
    password: 'mypass123'
  }
*/
export const register = async (ctx) => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string()
      .alphanum() // 값이 유효한 영숫자 문자열인지 확인
      .min(3)
      .max(20)
      .required(),
    password: Joi.string().required(),
  });

  // 검증 후 실패시 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      // 이미 존재하면 409
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      username,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // DB에 저장

    ctx.body = user.serialize();

    // 사용자 토큰을 쿠키에 담아서 사용
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
로그인
  POST /api/auth/login
  {
    username: 'keemgeena',
    password: 'mypass123'
  }
*/
export const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  // username, password가 없으면 에러 처리
  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await User.findByUsername(username);
    // 계정이 존재하지 않으면 에러 처리
    if (!user) {
      ctx.status = 401;
      return;
    }

    // 계정이 유효하다면 checkPassword를 통해 비밀번호 검사 후 성공 시 계정 정보를 응답
    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    // 사용자 토큰을 쿠키에 담아서 사용
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
로그인 상태 확인
  GET /api/auth/check
*/
export const check = async (ctx) => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인 중이 아니면
    ctx.status = 401; // Unauthorized
    return;
  }
  ctx.body = user;
};

/*
로그아웃
  POST /api/auth/logout
*/
export const logout = async (ctx) => {
  // 쿠키 지워주기
  ctx.cookies.set('access_token');
  ctx.status = 204; // No Content
};
