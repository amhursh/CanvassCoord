import React, { Component } from 'react'
import { Text } from 'react-native'

class CampaignItem extends Component {
  render() {
    console.log(this.props.campaign)
    const { campaign } = this.props

    return (
      <Text>{campaign.title}</Text>
    )
  }
}

export default CampaignItem