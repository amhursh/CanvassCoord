import axios from 'axios'

import { QUESTIONS_FETCH_SUCCESS } from './types'

export const questionsFetch = (surveyId) => {
  return (dispatch) => {
    axios.get(`http://canvass-coord-api.herokuapp.com/api/v1/surveys/${surveyId}/questions`)
      .then(response => {
        dispatch({ type: QUESTIONS_FETCH_SUCCESS, payload: response.data })
      })
  }
}