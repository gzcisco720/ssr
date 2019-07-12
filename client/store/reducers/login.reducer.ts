import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login.action';

const initialState: any = {
  loading: false,
  user: {
    isLogin: false,
    id: '',
    loginname: '',
    avatar_url: '',
  },
  error: null,
};

export default (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, ...{ loading: true, user: initialState.user, error: null } };
    case LOGIN_SUCCESS:
      return { ...state, ...{ user: { ...payload, isLogin: true }, error: null, loading: false } };
    case LOGIN_FAILURE:
      return { ...state, ...{ user: initialState.user, error: payload, loading: false } };
    default:
      return state;
  }
};
