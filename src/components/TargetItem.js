import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { CardSection, Button } from './common'

import { selectTarget } from '../actions'

class TargetItem extends Component {
  onButtonPress() {
    Actions.questionsList({campaignId: this.props.target.campaign_id})
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

  renderAddress(target) {
    const targetInfo = [
      target.street_number,
      target.street_name,
      target.unit,
      target.city,
      target.state,
      target.zip
    ]
    return (
      targetInfo.join(' ')
    )
  }

  render() {
    const target = this.props.target

    return (
      <TouchableNativeFeedback
        onPress={() => this.props.selectTarget(target.id)}
      >
        <View style={styles.targetViewStyle}>
          <CardSection>
            <Text>
              {target.id}
            </Text>
          </CardSection>
          <CardSection>
            <Text>
              {target.first_name + " " + target.last_name}
            </Text>
          </CardSection>
          <CardSection>
            <Text>
              {this.renderAddress(target)}
            </Text>
          </CardSection>
          <CardSection>
            <Text>
              Affiliation: {target.affiliation}
            </Text>
          </CardSection>
          {this.renderTargets()}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = {
  targetViewStyle: {
    paddingTop: 5
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTargetId === ownProps.target.id

  return {
    expanded: expanded
  }
}

export default connect(mapStateToProps, { selectTarget })(TargetItem)