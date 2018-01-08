import { SELECT_CAMPAIGN } from './types'

export const selectCampaign = (campaignId) => {
  return {
    type: SELECT_CAMPAIGN,
    payload: campaignId
  }
}