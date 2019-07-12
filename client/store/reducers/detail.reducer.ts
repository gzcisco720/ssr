import { FETCH_DETAIL, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_FAILURE } from '../actions/detail.action';

const initialState: any = {
  detail: {},
  error: null,
  loading: false,
};

export default (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DETAIL:
      return { ...state, ...{ detail: {}, error: null, loading: true } };
    case FETCH_DETAIL_SUCCESS:
      return { ...state, ...{ detail: payload, error: null, loading: false } };
    case FETCH_DETAIL_FAILURE:
      return { ...state, ...{ detail: {}, error: payload, loading: false } };
    default:
      return state;
  }
};
