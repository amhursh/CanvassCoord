import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import reducers from './reducers'

import { Header, Button, Card, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

const store = createStore(reducers)

class App extends Component {
  state = { loggedIn: null }

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
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <Spinner size="large" />
        ) 
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header headerTitle={'CanvassCoord'} />
          {this.renderContent()}
        </View>
      </Provider>
    )
  }
}

export default App