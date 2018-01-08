import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { Spinner, CardSection, Button } from './common'

import { answerChanged } from '../actions'

class AnswerForm extends Component {

  onButtonPress() {
    // Submit form
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

          />
        </CardSection>
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
            placeholder="Answer"
            onChangeText={this.onAnswerChange.bind(this)}
            value={this.props.answer}
            multiline={true}
            numberOfLines={6}
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
    textAlign: 'left',
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 20,
    flex: 1
  }
}

export default connect(mapStateToProps, { answerChanged })(AnswerForm)