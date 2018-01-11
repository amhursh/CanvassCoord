import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { CardSection, Button } from './common'
import SurveyList from './SurveyList'

import { surveysFetch, selectCampaign } from '../actions'

class CampaignItem extends Component {

  onButtonPress() {
    Actions.surveyList({campaign: this.props.campaign})
  }

  renderSurveys() {
    if (this.props.expanded) {
      return (
        <Button
          onPress={this.onButtonPress.bind(this)}
        >
        View Surveys for {this.props.campaign.title}
        </Button>
      )
    }
  }

  render() {
    const { campaign } = this.props

    return (
      <TouchableNativeFeedback
        onPress={() => this.props.selectCampaign(campaign.id)}
      >
        <View>
          <CardSection style={styles.campaignContainer}>
            <Text style={styles.campaignText}>
              {campaign.title}
            </Text>
          </CardSection>
          {this.renderSurveys()}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = {
  campaignText: {
    fontSize: 20,
    paddingLeft: 10
  },
  campaignContainer: {
    backgroundColor: '#53774c'
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedCampaignId === ownProps.campaign.id

  return {
    selectedCampaignId: state.selectedCampaignId,
    expanded: expanded
  }
}

export default connect(mapStateToProps, { surveysFetch, selectCampaign })(CampaignItem)