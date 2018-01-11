import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Spinner } from './common'
import SurveyItem from './SurveyItem'

import { surveysFetch } from '../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.surveysFetch(this.props.campaign.id)
  }

  renderRow(survey) {
    return (
      <SurveyItem 
        survey={survey.item}
      />
    )
  }

  render() {
    if (this.props.surveys) {
      return (
        <View style={styles.container} >
          <FlatList
            data={this.props.surveys}
            renderItem={this.renderRow}
            keyExtractor={(survey) => survey.id}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.container} >
          <Spinner size="large" />
        </View>
      )
    }
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#b3e5fc',
    paddingTop: 5
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    surveys: state.surveys
  }
}

export default connect(mapStateToProps, { surveysFetch })(SurveyList)
