import { SELECT_SURVEY } from './types'

export const selectSurvey = (surveyId) => {
  return {
    type: SELECT_SURVEY,
    payload: surveyId
  }
}