import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Button } from './common'
import CampaignItem from './CampaignItem'

import { logoutUser, campaignsFetch } from '../actions'

class CampaignList extends Component {
  componentWillMount() {
    this.props.campaignsFetch()
  }

  onButtonPress() {
    this.props.logoutUser()
  }

  renderRow(campaign) {
    return (
      <CardSection>
        <CampaignItem campaign={campaign.item} />
      </CardSection>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.campaigns}
          renderItem={this.renderRow}
          keyExtractor={(campaign) => campaign.id}
        />
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

const mapStateToProps = state => {
  return {
    campaigns: state.campaigns
  }
}

export default connect(mapStateToProps, { logoutUser, campaignsFetch })(CampaignList)