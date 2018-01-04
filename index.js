// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('CanvassCoord', () => App);


import React from 'react'
import { 
  Text,
  AppRegistry
 } from 'react-native'
import Header from './src/components/header'

const App = () => {
  return (
    <Header headerTitle={'CanvassCoord'} />
  )
}

AppRegistry.registerComponent('CanvassCoord', () => App)