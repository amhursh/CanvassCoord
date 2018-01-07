import { Actions } from 'react-native-router-flux'
import axios from 'axios'

import { CAMPAIGN_FETCH_SUCCESS } from './types'

export const campaignsFetch = () => {
  return (dispatch) => {
    axios.get('http://10.0.2.2:8080/api/v1/campaigns')
      .then(response => {
        dispatch({ type: CAMPAIGN_FETCH_SUCCESS, payload: response.data })
      })
  }
}