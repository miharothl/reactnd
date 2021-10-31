import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {_saveQuestion} from "../../utils/FakeApi";
import {handleReceiveUsers} from "../../app/actions/users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question: question,
    };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(handleReceiveUsers()))
            .then(() => dispatch(hideLoading()));
    };
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}