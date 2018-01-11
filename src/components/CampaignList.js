import React, { Component } from 'react'
import { View, Text, FlatList, TouchableNativeFeedback, Keyboard } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Button, Spinner } from './common'
import CampaignItem from './CampaignItem'

import { logoutUser, campaignsFetch } from '../actions'

class CampaignList extends Component {
  componentDidMount() {
    Keyboard.dismiss()
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
    if (this.props.campaigns) {
      return (
          <View style={styles.container} >
            <View style={styles.contentContainer} >
              <FlatList
                data={this.props.campaigns}
                renderItem={this.renderRow}
                keyExtractor={(campaign) => campaign.id}
              />
            </View>
            <View style={styles.logoutContainer}>
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
    } else {
      return (
        <Spinner size="large" />
      )
    }
  }
}

const styles = {
  contentContainer: {
    flex: 1,
    backgroundColor: '#b3e5fc'
  },
  container: {
    flex: 1,
    backgroundColor: '#53774c'
  },
  logoutContainer: {

  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.campaigns
  }
}



export default connect(mapStateToProps, { logoutUser, campaignsFetch })(CampaignList)