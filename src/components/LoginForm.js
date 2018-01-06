import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase'

import { emailChanged, passwordChanged } from '../actions'

import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this))
  }

  onLoginSuccess() {
    this.setState({ 
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: "Invalid Credentials"
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    )
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user123@gmail.com"
            label="Email" 
            value={this.props.email}
            // onChangeText={email => this.setState({ email })}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true} 
            placeholder="opensesame123"
            label="Password"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)