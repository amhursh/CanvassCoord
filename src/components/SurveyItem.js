import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { CardSection, Button } from './common'

import { selectSurvey } from '../actions'

class SurveyItem extends Component {

  onButtonPress() {
    // render actions for a campaign
  }

  renderSurveys() {
    if (this.props.expanded) {
      return (
        <Button
          onPress={this.onButtonPress.bind(this)}
        >
        View Targets
        </Button>
      )
    }
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedSurveyId === ownProps.survey.id

  return {
    expanded
  }
}

export default connect(mapStateToProps, { selectSurvey })(SurveyItem)