import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';

import {authedUser, userReducers} from '../../components/user/userReducers';
import questionReducers from '../../components/question/questionReducers';

export default combineReducers({
  authedUser,
  users: userReducers,
  questions: questionReducers,
  loadingBar: loadingBarReducer,
});
