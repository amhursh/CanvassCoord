import { Actions } from 'react-native-router-flux'

import { ANSWER_CHANGED } from './types'

export const answerChanged = (text) => {
  return {
    type: ANSWER_CHANGED,
    payload: text
  }
}