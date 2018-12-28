import React from 'react'
import { View } from 'react-native'
import styles from '../../styles/cardSection'

const CardSection = (props) => (
  <View style={styles.constainerStyle}>
    {props.children}
  </View>
)

export { CardSection }