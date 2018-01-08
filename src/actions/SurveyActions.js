import { Actions } from 'react-native-router-flux'
import axios from 'axios'

import { SURVEY_FETCH_SUCCESS } from './types'

export const surveysFetch = (campaignId) => {
  return (dispatch) => {
    axios.get(`http://canvass-coord-api.herokuapp.com/api/v1/surveys?campaign=${campaignId}`)
      .then(response => {
        // console.log(response.data)
        dispatch({ type: SURVEY_FETCH_SUCCESS, payload: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}