import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerTitle}</Text>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 25
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    elevation: 10,
    shadowOpacity: 0.5,
    position: 'relative'
  }
}

export { Header }