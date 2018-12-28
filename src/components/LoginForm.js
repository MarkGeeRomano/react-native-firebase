import React from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner
} from './common'
import styles from '../styles/loginForm'

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFailed = this.onLoginFailed.bind(this)
  }

  async onButtonPress() {
    const { email, password } = this.state

    this.setState(() => ({ error: '', loading: true }))
    let success = true
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (err) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
      } catch (err) {
        success = false
      }
    }

    success ? this.onLoginSuccess() : this.onLoginFailed()
  }

  onLoginSuccess() {
    this.setState(() => ({ 
      email: '', 
      password: '', 
      loading: false 
    }))
  }

  onLoginFailed() {
    this.setState(() => ({ 
      error: 'Authentication Failed', 
      loading: false 
    }))
  }

  renderButton() {
    return this.state.loading
      ? <Spinner size='small' />
      : <Button onPress={this.onButtonPress.bind(this)}>
        Login
        </Button>
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={(email) => this.setState(() => ({ email }))}
            value={this.state.email}
            placeholder="user@website.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            onChangeText={(password) => this.setState(() => ({ password }))}
            value={this.state.password}
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm