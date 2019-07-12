import { all } from '@redux-saga/core/effects';
import fetchTopicsSaga from './topic.saga';
import fetchDetailSaga from './detail.saga';
import loginSaga from './login.saga';

export default function* rootSaga() {
  yield all([
    fetchTopicsSaga(),
    fetchDetailSaga(),
    loginSaga(),
  ]);
}
