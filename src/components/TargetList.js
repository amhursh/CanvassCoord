import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Button } from './common'
import { logoutUser } from '../actions'

class TargetList extends Component {
  onButtonPress() {
    this.props.logoutUser()
  }

  render() {
    return (
      <View>
        <Text>Targets go Here</Text>
        <Text>Targets go Here</Text>
        <Text>Targets go Here</Text>
        <Text>Targets go Here</Text>
        <Text>Targets go Here</Text>
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Logout
          </Button>
        </CardSection>
      </View>
    )
  }
}

export default connect(null, { logoutUser })(TargetList)