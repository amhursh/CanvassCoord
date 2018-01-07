import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import LoginForm from './components/LoginForm'
import TargetList from './components/TargetList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>
        <Scene key="main">
          <Scene key="targetList" component={TargetList} title="Targets" />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent