import {_getUsers} from "../../utils/FakeApi";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleReceiveUsers() {
  return (dispatch) => {
    return _getUsers()
        .then(( users ) => {
          dispatch(receiveUsers(users));
        });
  };
}

