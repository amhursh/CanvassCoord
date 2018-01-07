import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'

import reducers from './reducers'
import { Header, Button, Card, CardSection, Spinner } from './components/common'
// import LoginForm from './components/LoginForm'
import Router from './Router'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

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
  }

  render() {
    return (
      <Provider store={store}>        
        <Router />
      </Provider>
    )
  }
}

export default App