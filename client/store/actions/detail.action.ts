import { IDetail } from '../../DTOs/IDetail';

export const FETCH_DETAIL = 'FETCH_DETAIL';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_FAILURE = 'FETCH_DETAIL_FAILURE';

interface IFetchDetailAction {
  type: typeof FETCH_DETAIL;
  payload: string;
}

interface IFetchDetailSuccessAction {
  type: typeof FETCH_DETAIL_SUCCESS;
  payload: IDetail;
}

interface IFetchDetailFailureAction {
  type: typeof FETCH_DETAIL_FAILURE;
  payload: any;
}

export const fetchDetail = (id: string): IFetchDetailAction => ({
  type: FETCH_DETAIL,
  payload: id,
});

export const fetchDetailSuccess = (detail: IDetail): IFetchDetailSuccessAction => ({
  type: FETCH_DETAIL_SUCCESS,
  payload: detail,
});

export const fetchDetailFailure = (error: any): IFetchDetailFailureAction => ({
  type: FETCH_DETAIL_FAILURE,
  payload: error,
});
