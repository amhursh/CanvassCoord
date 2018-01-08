import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Spinner } from './common'

import { surveysFetch } from '../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.surveysFetch(this.props.campaign.id)
  }



  renderSurveys() {
    console.log(this.props.surveys)
    if(this.props.surveys) {
      return (
        <Text>{this.props.surveys[0].title}</Text>
      )
    } else {
      return (
        <Spinner size="large" />
      )
    }
  }

  render() {
    // console.log(this.props.surveys)
      return (
        <View>
          <CardSection>
            {this.renderSurveys()}
          </CardSection>
        </View>
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