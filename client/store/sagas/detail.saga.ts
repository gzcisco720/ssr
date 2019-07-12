
import { put, takeLatest } from '@redux-saga/core/effects';
import { FETCH_DETAIL_SUCCESS, FETCH_DETAIL_FAILURE, FETCH_DETAIL } from '../actions';
import { get } from '../../config/http';

const { API_URL } = process.env;

function* fetchDetail(action: any) {
  const id = action.payload;
  try {
    const response = yield get(`${API_URL}/api/topic/${id}`, {});
    const { data } = response;
    yield put({ type: FETCH_DETAIL_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_DETAIL_FAILURE, payload: e });
  }
}

function* fetchDetailSaga() {
  yield takeLatest(FETCH_DETAIL, fetchDetail);
}

export default fetchDetailSaga;
