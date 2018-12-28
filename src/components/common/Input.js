import React from 'react'
import { TextInput, View, Text } from 'react-native'
import styles from '../../styles/input'

const Input = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>
        {props.label}
      </Text>
      <TextInput
        autoCorrect={false}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.inputStyle}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  )
}

export { Input }