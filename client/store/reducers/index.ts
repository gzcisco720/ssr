import { combineReducers } from 'redux';
import TopicReducer from './topic.reducer';
import DetailReducer from './detail.reducer';
import loginReducer from './login.reducer';

export default combineReducers({
  topics: TopicReducer,
  detail: DetailReducer,
  user: loginReducer,
});
