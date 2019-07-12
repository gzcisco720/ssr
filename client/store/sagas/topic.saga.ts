import { put, takeLatest } from '@redux-saga/core/effects';
import { FETCH_TOPICS_SUCCESS, FETCH_TOPICS_FAILURE, FETCH_TOPICS } from '../actions';
import { get } from '../../config/http';

function* fetchTopics(action: any) {
  const tab = action.payload;
  try {
    const response = yield get('/topics', { tab });
    const { data } = response;
    yield put({ type: FETCH_TOPICS_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_TOPICS_FAILURE, payload: e });
  }
}

function* fetchTopicsSaga() {
  yield takeLatest(FETCH_TOPICS, fetchTopics);
}

export default fetchTopicsSaga;
