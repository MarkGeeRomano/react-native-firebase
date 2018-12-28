import React from 'react'
import { View } from 'react-native'
import styles from '../../styles/card'

const Card = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
)

export { Card }