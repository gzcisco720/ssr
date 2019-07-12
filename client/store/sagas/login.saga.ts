import { put, takeLatest } from '@redux-saga/core/effects';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';
import { post } from '../../config/http';

function* login(action: any) {
  const accesstoken = action.payload;
  try {
    const response = yield post('/user/login', {}, { accesstoken });
    const { data } = response;
    const { id, loginname, avatar_url } = data;
    yield put({ type: LOGIN_SUCCESS, payload: { id, loginname, avatar_url } });
  } catch (e) {
    yield put({ type: LOGIN_FAILURE, payload: e });
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export default loginSaga;
