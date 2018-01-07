import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import LoginForm from './components/LoginForm'
import TargetList from './components/TargetList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Login" />
        <Scene key="targetList" component={TargetList} title="Targets" />
      </Scene>
    </Router>
  )
}

export default RouterComponent