import { ANSWER_CHANGED, SUBMIT_ANSWER_SUCCESS } from '../actions/types'

const INITIAL_STATE = { answer: '' }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ANSWER_CHANGED:
      return { ...state, answer: action.payload }
    case SUBMIT_ANSWER_SUCCESS:
      return INITIAL_STATE
    default:
      return state
  }
}