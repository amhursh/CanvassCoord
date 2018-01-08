import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { CardSection, Button } from './common'

import { selectTarget } from '../actions'

class TargetItem extends Component {
  onButtonPress() {
    // go to survey and bring target id
  }

  renderTargets() {
    if (this.props.expanded) {
      return (
        <Button
          onPress={this.onButtonPress.bind(this)}
        >
        Start Survey
        </Button>
      )
    }
  }

  render() {
    const target = this.props.target

    return (
      <TouchableNativeFeedback
        onPress={() => this.props.selectTarget(target.id)}
      >
        <View>
          <CardSection>
            <Text>
              {target.first_name}
            </Text>
          </CardSection>
          <
          {this.renderTargets()}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTargetId === ownProps.target.id

  return {
    expanded: expanded
  }
}

export default connect(mapStateToProps, { selectTarget })(TargetItem)