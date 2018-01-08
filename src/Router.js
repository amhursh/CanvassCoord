import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import LoginForm from './components/LoginForm'
import TargetList from './components/TargetList'
import CampaignList from './components/CampaignList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene key="campaignList" component={CampaignList} title="Campaigns" />

          <Scene
            key="targetList" 
            component={TargetList} 
            title="Targets" 
            headerMode="screen" 
          />
        </Scene>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent