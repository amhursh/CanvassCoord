import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { CardSection, Spinner } from './common'
import TargetItem from './TargetItem'

import { targetsFetch } from '../actions'

class TargetList extends Component {
  componentDidMount() {
    this.props.targetsFetch(this.props.campaign_id)
  }

  renderRow(target) {
    return (
      <TargetItem target={target.item} />
    )
  }

  render() {
    if (this.props.targets) {
      return (
        <View style={styles.container} >
          <FlatList
            data={this.props.targets}
            renderItem={this.renderRow}
            keyExtractor={(target) => target.id}
          />
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
  container: {
    flex: 1,
    backgroundColor: '#b3e5fc'
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    targets: state.targets
  }
}

export default connect(mapStateToProps, { targetsFetch })(TargetList)