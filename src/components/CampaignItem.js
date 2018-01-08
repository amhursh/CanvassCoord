import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'

import { CardSection } from './common'

import { surveysFetch, selectCampaign } from '../actions'

class CampaignItem extends Component {
  componentWillMount() {
    // this.props.surveysFetch(this.props.campaign.id)
  }


  renderSurveys() {
    if (this.props.expanded) {
      // console.log(this.props.selectedCampaignId)
      // if(!this.props.surveys)
        this.props.surveysFetch(this.props.selectedCampaignId)
      
      console.log(this.props.surveys)

      if(this.props.surveys)
        return (
          <CardSection>
            <Text>{this.props.surveys[0].title}</Text>
          </CardSection>
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
          <CardSection>
            <Text style={styles.campaignStyles}>
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
  campaignStyles: {
    fontSize: 20,
    paddingLeft: 10
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedCampaignId === ownProps.campaign.id
  console.log(state.surveys)

  return {
    surveys: state.surveys,
    selectedCampaignId: state.selectedCampaignId,
    expanded: expanded
  }
}

export default connect(mapStateToProps, { surveysFetch, selectCampaign })(CampaignItem)