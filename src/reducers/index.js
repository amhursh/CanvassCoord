import { combineReducers } from 'redux'

import AuthReducer from './AuthReducer'
import CampaignReducer from './CampaignReducer'
import SurveyReducer from './SurveyReducer'
import CampaignSelectionReducer from './CampaignSelectionReducer'
import SurveySelectionReducer from './SurveySelectionReducer'

export default combineReducers({
  auth: AuthReducer,
  campaigns: CampaignReducer,
  surveys: SurveyReducer,
  selectedCampaignId: CampaignSelectionReducer,
  selectedSurveyId: SurveySelectionReducer
})