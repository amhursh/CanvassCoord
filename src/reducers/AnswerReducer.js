import { ANSWER_CHANGED, SUBMIT_ANSWER_SUCCESS, IS_QUESTION_ANSWERED_FETCH_SUCCESS } from '../actions/types'

const INITIAL_STATE = { answer: '', questionsAnswered: null }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ANSWER_CHANGED:
      return { ...state, answer: action.payload }
    case SUBMIT_ANSWER_SUCCESS:
      // return INITIAL_STATE
      return { ...state, answer: ''}
    case IS_QUESTION_ANSWERED_FETCH_SUCCESS:
      return { ...state, questionsAnswered: action.payload }
    default:
      return state
  }
}