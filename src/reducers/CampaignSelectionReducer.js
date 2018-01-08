import { SELECT_CAMPAIGN } from '../actions/types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_CAMPAIGN:
      return action.payload
    default:
      return state
  }
}