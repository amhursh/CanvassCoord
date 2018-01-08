import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import LoginForm from './components/LoginForm'
import TargetList from './components/TargetList'
import CampaignList from './components/CampaignList'
import SurveyList from './components/SurveyList'
import QuestionList from './components/QuestionList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key="main">

          <Scene 
            key="campaignList" 
            component={CampaignList} 
            title="Campaigns" 
          />

          <Scene
            key="surveyList"
            component={SurveyList}
            title="Surveys"
          />

          <Scene
            key="targetList" 
            component={TargetList} 
            title="Targets" 
            headerMode="screen" 
          />

          <Scene
            key="questionsList"
            component={QuestionList}
            title="Survey"
          />

        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent