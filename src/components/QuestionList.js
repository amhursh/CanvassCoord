import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { Spinner } from './common'
// import QuestionItem from './QuestionItem'

import { questionsFetch } from '../actions'

class QuestionList extends Component {
  componentDidMount() {
    this.props.questionsFetch(this.props.selectedSurveyId)
  }

  render() {
    return (
      <Text>Cool Beans</Text>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedSurveyId: state.selectedSurveyId
  }
}

export default connect(mapStateToProps, { questionsFetch })(QuestionList)

