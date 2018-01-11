import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { CardSection, Button } from './common'

import { selectQuestion, isQuestionAnswered } from '../actions'

class QuestionItem extends Component {
  componentDidMount() {
    this.props.isQuestionAnswered(this.props.targetId, this.props.questionId)
  }

  onButtonPress() {
    Actions.answerForm({question: this.props.question})
  }

  renderQuestions() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
          Answer
          </Button>
        </CardSection>
      )
    }
  }

  render() {
    const question = this.props.question

    return (
      <TouchableNativeFeedback
        onPress={() => this.props.selectQuestion(question.id)}
      >
        <View>
          <CardSection>
            <Text>
              {question.body}
            </Text>
          </CardSection>
          {this.renderQuestions()}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedQuestionId === ownProps.question.id

  return {
    expanded: expanded,
    questionId: state.selectedQuestionId,
    targetId: state.selectedTargetId
  }
}

export default connect(mapStateToProps, { selectQuestion, isQuestionAnswered })(QuestionItem)