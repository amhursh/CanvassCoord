import axios from 'axios'

import { TARGET_FETCH_SUCCESS } from './types'

export const targetsFetch = (campaignId) => {
  return (dispatch) => {
    axios.get(`http://canvass-coord-api.herokuapp.com/api/v1/campaigns/${campaignId}/targets`)
      .then(response => {
        dispatch({ type: TARGET_FETCH_SUCCESS, payload: response.data })
      })
  }
}