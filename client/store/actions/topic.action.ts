import { ITopic } from '../../DTOs/ITopic';

export const FETCH_TOPICS = 'FETCH_TOPICS';
export const FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS';
export const FETCH_TOPICS_FAILURE = 'FETCH_TOPICS_FAILURE';

interface IFetchTopicsAction {
  type: typeof FETCH_TOPICS;
  payload: string;
}

interface IFetchTopicsSuccessAction {
  type: typeof FETCH_TOPICS_SUCCESS;
  payload: ITopic[];
}

interface IFetchTopicsFailureAction {
  type: typeof FETCH_TOPICS_FAILURE;
  payload: any;
}

export const fetchTopic = (tab: string): IFetchTopicsAction => ({
  type: FETCH_TOPICS,
  payload: tab,
});

export const fetchTopicSuccess = (topics: ITopic[]): IFetchTopicsSuccessAction => ({
  type: FETCH_TOPICS_SUCCESS,
  payload: topics,
});

export const fetchTopicFailure = (error: any): IFetchTopicsFailureAction => ({
  type: FETCH_TOPICS_FAILURE,
  payload: error,
});
