import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Button } from './common'
import { logoutUser } from '../actions'

class CampaignList extends Component {
  onButtonPress() {
    this.props.logoutUser()
  }

  render() {
    return (
      <View>
        <Text>Campaign 1</Text>
        <Text>Campaign 2</Text>
        <Text>Campaign 3</Text>
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

export default connect(null, { logoutUser })(CampaignList)