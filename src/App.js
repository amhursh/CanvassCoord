import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from './components/common/header'

class App extends Component {
  render() {
    return (
      <Header headerTitle={'CanvassCoord'} />
    )
  }
}

export default App