import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';

import authedUser from './authedUser';
import users from './users';
import questionsReducers from '../../components/questions/questionsReducers';

export default combineReducers({
  authedUser,
  users,
  questions: questionsReducers,
  loadingBar: loadingBarReducer,
});
