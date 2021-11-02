import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {receiveUsers, setAuthedUser} from '../components/user/userActions';
import {getInitialData} from "../utils/FakeApi";
import {receiveQuestions} from "../components/question/questionActions";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(null));
        dispatch(hideLoading());
      });
  };
}
