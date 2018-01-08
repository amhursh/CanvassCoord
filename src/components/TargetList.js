import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Spinner } from './common'
import { } from '../actions'

import { targetsFetch } from '../actions'

class TargetList extends Component {
  componentDidMount() {
    this.props.targetsFetch(this.props.campaign_id)
  }

  renderRow(target) {
    return (
      // <TargetItem target={target.item} />
      <Text>TargetsGoHere</Text>
    )
  }

  render() {
    if (this.props.targets) {
      return (
        <FlatList
          data={this.props.target}
          renderItem={this.renderRow}
          keyExtractor={(target) => target.id}
        />
      )
    } else {
      return (
        <Spinner size="large" />
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    targets: state.targets
  }
}

export default connect(mapStateToProps, { targetsFetch })(TargetList)