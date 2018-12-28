import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../../styles/button'

const Button = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={props.onPress}
    >
      <Text style={styles.textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

export { Button }