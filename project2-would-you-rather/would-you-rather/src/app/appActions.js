import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { receiveUsers } from './actions/users';
import { setAuthedUser } from './actions/authedUser';
import {getInitialData} from "../utils/FakeApi";
import {receiveQuestions} from "../components/questions/questionsActions";

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(hideLoading());
      });
  };
}
