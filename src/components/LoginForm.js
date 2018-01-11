import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase'

import { emailChanged, passwordChanged, loginUser } from '../actions'

import { Button, Card, CardSection, Input, Spinner } from './common'

const background = 'http://www.singhajit.com/wp-content/uploads/2015/09/gradient-2.png'

class LoginForm extends Component {

  renderButton() {
    if (this.props.loading) {
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

  onButtonPress() {
    const { email, password } = this.props

    this.props.loginUser({email, password})
  }

  renderError() {
    if (this.props.error) {
      return (
        <CardSection>
          <View style={styles.errorTextContainer} >
            <Text style={styles.errorText}>
              {this.props.error}
            </Text>
          </View>
        </CardSection>
      )
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.contentContainer}>
        <Card>
          <CardSection>
            <View style={styles.titleContainer}>
              <Text
                style={styles.titleText}
              >
                CanvassCoord
              </Text>
            </View>
          </CardSection>
          <CardSection>
            <Input
              placeholder="user123@gmail.com"
              label="Email" 
              value={this.props.email}
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
            {this.renderError()}
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
        </View>
      </View>
    )
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  errorTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#b3e5fc'
  },
  titleText: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  contentContainer: {
    paddingBottom: 100
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)