import { SELECT_SURVEY } from '../actions/types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_SURVEY:
      return action.payload
    default:
      return state
  }
}