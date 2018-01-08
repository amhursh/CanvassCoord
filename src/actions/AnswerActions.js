import { Actions } from 'react-native-router-flux'
import axios from 'axios'

import { ANSWER_CHANGED, SUBMIT_ANSWER_SUCCESS } from './types'

export const answerChanged = (text) => {
  return {
    type: ANSWER_CHANGED,
    payload: text
  }
}

export const submitAnswer = (answer, questionId, targetId) => {
  return dispatch => {
    axios.post(`http:10.0.2.2:8080/api/v1/answers`, {
      answer: answer,
      questionId: questionId,
      targetId: targetId
    })
    .then(response => {
      dispatch({ type: SUBMIT_ANSWER_SUCCESS, payload: response.data})
    })
    Actions.pop()
  }
}

