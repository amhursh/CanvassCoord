import { ANSWER_CHANGED } from '../actions/types'

const INITIAL_STATE = { answer: '' }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ANSWER_CHANGED:
      return { ...state, answer: action.payload }
    default:
      return state
  }
}