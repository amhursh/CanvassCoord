import { Actions } from 'react-native-router-flux'
import axios from 'axios'

import { CAMPAIGN_FETCH_SUCCESS } from './types'

export const campaignsFetch = () => {
  return (dispatch) => {
    axios.get('http://canvass-coord-api.herokuapp.com/api/v1/campaigns')
      .then(response => {
        dispatch({ type: CAMPAIGN_FETCH_SUCCESS, payload: response.data })
      })
  }
}