import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

// ✔ 인스턴스 메서드
// 비밀번호 설정
// 화살표 함수가 아닌 function 키워드를 사용하여 구현해야 한다.
// => 함수 내부에서 this에 접근해야하기 때문! 여기서 this는 문서 인스턴스를 가리킨다.
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true / false
};

// hashedPassword 필드가 응답되지 않도록 데이터를 JSON으로 변환한 후 delete를 통해 지워준다.
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

// jsonwebtoken
UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣는다.
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣는다.
    {
      expiresIn: '7d', // 7일 동안 유효
    },
  );
  return token;
};

// ✔ 스태틱 메서드
// 계정
// this는 모델(User)를 가리킨다.
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

const User = mongoose.model('User', UserSchema);
export default User;
