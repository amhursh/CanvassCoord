import { SELECT_QUESTION } from './types'

export const selectQuestion = (questionId) => {
  return {
    type: SELECT_QUESTION,
    payload: questionId
  }
}