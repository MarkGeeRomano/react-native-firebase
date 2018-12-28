import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/header'

const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>
      {props.children}
    </Text>
  </View>
)

export { Header }