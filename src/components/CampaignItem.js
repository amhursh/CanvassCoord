import React, { Component } from 'react'
import { Text } from 'react-native'

class CampaignItem extends Component {
  render() {
    console.log(this.props.campaign)
    const { campaign } = this.props

    return (
      <Text style={styles.campaignStyles}>
        {campaign.title}
      </Text>
    )
  }
}

const styles = {
  campaignStyles: {
    fontSize: 20,
    paddingLeft: 10
  }
}

export default CampaignItem