import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'

import { Header, Button, CardSection } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: false }

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <CardSection>
          <Button style={{paddingTop: 50}}>
            Log Out
          </Button>
        </CardSection>
      )
    }

    return <LoginForm />
  }

  render() {
    return (
      <View>
        <Header headerTitle={'CanvassCoord'} />
        {this.renderContent()}
      </View>
    )
  }
}

export default App