import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyARIGipyqxdnCwUYmZBwnaG8L_HlIFT49M",
        authDomain: "canvasscoord.firebaseapp.com",
        databaseURL: "https://canvasscoord.firebaseio.com",
        projectId: "canvasscoord",
        storageBucket: "canvasscoord.appspot.com",
        messagingSenderId: "149344466621"
      }
    )
  }

  render() {
    return (
      <View>
        <Header headerTitle={'CanvassCoord'} />
        <LoginForm />
      </View>
    )
  }
}

export default App