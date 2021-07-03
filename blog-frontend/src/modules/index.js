import { combineReducers } from 'redux';
import { allowUnknownOption } from '../../node_modules/commander/typings/index';
import auth, { authSaga } from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield allowUnknownOption([authSaga()]);
}

export default rootReducer;
