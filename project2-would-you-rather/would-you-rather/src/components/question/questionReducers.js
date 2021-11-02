import {ADD_QUESTION, RECEIVE_QUESTIONS} from "./questionActions";

export default function questionReducers(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS: {
      return {
        ...state,
        ...action.questions,
      };
    }

    case ADD_QUESTION: {
      const id = action.question.id;
      const q = action.question;

      state[id] = q;

      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
