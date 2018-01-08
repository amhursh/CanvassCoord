import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { Spinner, CardSection } from './common'

class AnswerForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          {this.props.question.body}
        </CardSection>
        <CardSection>
          <TextInput 

          />
        </CardSection>
      </View>
    )
  }
}

export default AnswerForm