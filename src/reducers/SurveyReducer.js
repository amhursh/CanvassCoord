import { SURVEY_FETCH_SUCCESS } from '../actions/types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SURVEY_FETCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}