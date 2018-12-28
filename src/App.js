import React from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import {
  Header,
  Button,
  Card,
  CardSection,
  Spinner
} from './components/common'
import LoginForm from './components/LoginForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = { loggedIn: null }
    this.renderContent = this.renderContent.bind(this)
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDRPxliBSxKDWQcNGcargNuPn81eYt66Kw',
      authDomain: 'auth-3fecf.firebaseapp.com',
      databaseURL: 'https://auth-3fecf.firebaseio.com',
      projectId: 'auth-3fecf',
      storageBucket: 'auth-3fecf.appspot.com',
      messagingSenderId: '531616299593'
    })

    firebase.auth().onAuthStateChanged((user) =>
      this.setState({ loggedIn: !!user })
    )
  }

  renderContent() {
    const logout = (
      <Card>
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      </Card>
    )
    
    let component
    switch (this.state.loggedIn) {
      case true:
        component = logout
        break
      case false:
        component = <LoginForm/>
        break
      default:
        return <Spinner/>
    }

    return component
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        {this.renderContent()}
      </View>
    )
  }
}

export default App