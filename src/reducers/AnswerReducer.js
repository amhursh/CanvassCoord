import { ANSWER_CHANGED, SUBMIT_ANSWER } from '../actions/types'

const INITIAL_STATE = { answer: '' }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ANSWER_CHANGED:
      return { ...state, answer: action.payload }
    case 
    default:
      return state
  }
}