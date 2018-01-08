import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { Spinner } from './common'
import QuestionItem from './QuestionItem'

import { questionsFetch } from '../actions'

class QuestionList extends Component {
  componentDidMount() {
    this.props.questionsFetch(this.props.selectedSurveyId)
  }

  renderRow(question) {
    return (
      <QuestionItem
        question={question.item}
      />
    )
  }

  render() {
    if (this.props.questions) {
      return (
        <FlatList
          data={this.props.questions}
          renderItem={this.renderRow}
          keyExtractor={(question) => question.id}
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
    selectedSurveyId: state.selectedSurveyId,
    questions: state.questions
  }
}

export default connect(mapStateToProps, { questionsFetch })(QuestionList)

