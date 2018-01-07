import React, { Component } from 'react'
import { Text } from 'react-native'

class CampaignItem extends Component {
  render() {
    const { campaign } = this.props

    return (
      <Text>{campaign.title}</Text>
    )
  }
}

export default CampaignItem