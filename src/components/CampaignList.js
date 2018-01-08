import React, { Component } from 'react'
import { View, Text, FlatList, TouchableNativeFeedback } from 'react-native'
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
        <CampaignItem campaign={campaign.item} />
    )
  }

  render() {
    return (
      <View style={styles.logoutStyle}>
        <FlatList
          data={this.props.campaigns}
          renderItem={this.renderRow}
          keyExtractor={(campaign) => campaign.id}
        />
        <View>
          <CardSection>
            <Button
              onPress={this.onButtonPress.bind(this)}
            >
              Logout
            </Button>
          </CardSection>
        </View>
      </View>
    )
  }
}

const styles = {
  logoutStyle: {
    justifyContent: 'space-between'
  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.campaigns
  }
}



export default connect(mapStateToProps, { logoutUser, campaignsFetch })(CampaignList)