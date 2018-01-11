import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { CardSection, Button } from './common'

import { selectSurvey } from '../actions'

class SurveyItem extends Component {

  onButtonPress() {
    Actions.targetList({campaign_id: this.props.survey.campaign_id})
  }

  renderSurveys() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
          View Targets
          </Button>
        </CardSection>
      )
    }
  }

  render() {
    const survey = this.props.survey

    return (
      <TouchableNativeFeedback
        onPress={() => this.props.selectSurvey(survey.id)}
      >
        <View>
          <CardSection>
            <Text style={styles.surveyText}>
              {survey.title}
            </Text>
          </CardSection>
          {this.renderSurveys()}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = {
  surveyText: {
    fontSize: 20,
    paddingLeft: 10
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedSurveyId === ownProps.survey.id

  return {
    expanded: expanded
  }
}

export default connect(mapStateToProps, { selectSurvey })(SurveyItem)