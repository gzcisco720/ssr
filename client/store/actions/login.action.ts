import { IUser } from '../../DTOs/IUser';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface ILoginAction {
  type: typeof LOGIN;
  payload: string;
}

interface ILoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: IUser;
}

interface ILoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: any;
}

export const login = (token: string): ILoginAction => ({
  type: LOGIN,
  payload: token,
});

export const loginSuccess = (user: IUser): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: any): ILoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error,
});
