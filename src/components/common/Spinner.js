import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from '../../styles/spinner'

const Spinner = (props) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={props.size || 'large'}/>
    </View>
  )
}

export { Spinner }