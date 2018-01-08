import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Spinner } from './common'

import { surveysFetch } from '../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.surveysFetch(this.props.campaign.id)
  }

  render() {
    alert(this.props.campaign.id)
    return (
      <Text>Some shit</Text>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    surveys: state.surveys
  }
}

export default connect(mapStateToProps, { surveysFetch })(SurveyList)
// export default SurveyItem