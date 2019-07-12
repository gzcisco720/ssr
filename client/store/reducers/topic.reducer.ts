import { FETCH_TOPICS, FETCH_TOPICS_SUCCESS, FETCH_TOPICS_FAILURE } from '../actions/topic.action';

const initialState: any = {
  topics: [],
  error: null,
  loading: false,
};

export default (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TOPICS:
      return { ...state, ...{ topics: [], error: null, loading: true } };
    case FETCH_TOPICS_SUCCESS:
      return { ...state, ...{ topics: payload, error: null, loading: false } };
    case FETCH_TOPICS_FAILURE:
      return { ...state, ...{ topics: [], error: payload, loading: false } };
    default:
      return state;
  }
};
