import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { Spinner, CardSection, Button } from './common'

import { answerChanged } from '../actions'

class AnswerForm extends Component {

  onButtonPress() {
    console.log(this.props.answer)
  }

  onAnswerChange(text) {
    this.props.answerChanged(text)
  }

  render() {
    return (
      <View>
        <CardSection>
          <Text>
            {this.props.question.body}
          </Text>
        </CardSection>
        <CardSection>
          <TextInput 
            style={styles.inputStyle}
            placeholder="Answer"
            onChangeText={this.onAnswerChange.bind(this)}
            value={this.props.answer}
            multiline={true}
            numberOfLines={6}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Submit
          </Button>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  inputStyle: {
    textAlign: 'lefts',
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 20,
    flex: 1
  }
}

const mapStateToProps = state => {
  return {
    answer: state.answers.answer
  }
}

export default connect(mapStateToProps, { answerChanged })(AnswerForm)