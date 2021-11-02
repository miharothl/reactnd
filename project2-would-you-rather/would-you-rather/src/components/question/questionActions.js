import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../../utils/FakeApi";
import {handleReceiveUsers} from "../user/userActions";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question: question,
    };
}

export function handleReceiveQuestions() {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions()
            .then(( questions ) => {
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
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

export function handleSaveAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());

        return _saveQuestionAnswer({
            authedUser: authedUser,
            qid: questionId,
            answer: answer,
        })
            .then(() => dispatch(handleReceiveQuestions()))
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