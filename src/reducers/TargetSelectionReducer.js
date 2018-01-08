import { SELECT_TARGET } from '../actions/types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_TARGET:
      return action.payload
    default:
      return state
  }
} 