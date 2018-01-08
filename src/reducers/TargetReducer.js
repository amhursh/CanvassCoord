import { TARGET_FETCH_SUCCESS } from '../actions/types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TARGET_FETCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}