import axios from 'axios'

import { QUESTIONS_FETCH_SUCCESS } from '.types'

export const questionsFetch = (surveyId) => {
  return (dispatch) => {
    axios.get(`http:10.0.2.2:8080/api/v1/surveys/${surveyId}/questions`)
      .then(response => {
        dispatch({ type: QUESTIONS_FETCH_SUCCESS, payload: response.data })
      })
  }
}