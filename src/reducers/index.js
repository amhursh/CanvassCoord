import { combineReducers } from 'redux'

import AuthReducer from './AuthReducer'
import CampaignReducer from './CampaignReducer'
import SurveyReducer from './SurveyReducer'
import TargetReducer from './TargetReducer'
import QuestionReducer from './QuestionReducer'
import CampaignSelectionReducer from './CampaignSelectionReducer'
import SurveySelectionReducer from './SurveySelectionReducer'
import TargetSelectionReducer from './TargetSelectionReducer'

export default combineReducers({
  auth: AuthReducer,
  campaigns: CampaignReducer,
  surveys: SurveyReducer,
  targets: TargetReducer,
  questions: QuestionReducer,
  selectedCampaignId: CampaignSelectionReducer,
  selectedSurveyId: SurveySelectionReducer,
  selectedTargetId: TargetSelectionReducer
})