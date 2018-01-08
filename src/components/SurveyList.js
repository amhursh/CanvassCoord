import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Spinner } from './common'

import { surveysFetch } from '../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.surveysFetch(this.props.campaign.id)
  }

  renderRow(survey) {
    return (
      <SurveyItem survey={survey.item} />
    )
  }

  render() {
    console.log(this.props.surveys)
    if (this.props.surveys) {
      return (
        <FlatList
          data={this.props.surveys}
          renderItem={this.renderRow}
          keyExtractor={(survey) => survey.id}
        />
      )
    } else {
      return (
        <Spinner size="large" />
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    surveys: state.surveys
  }
}

export default connect(mapStateToProps, { surveysFetch })(SurveyList)
