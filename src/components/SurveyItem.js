import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { CardSection, Button } from './common'


class SurveyItem extends Component {

  renderSurveys() {

  }

  render() {
    const { survey } = this.props

    return (
      <TouchableNativeFeedback
        onPress={() => this.props.selectSurvey(survey.id)}
      >
        <View>
          <CardSection>
            <Text>
              {survey.title}
            </Text>
          </CardSection>
          {this.renderSurveys()}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default SurveyItem