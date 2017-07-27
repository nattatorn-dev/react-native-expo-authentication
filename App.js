import React from 'react';
import { View, StatusBar } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './js/components/common';
import LoginForm from './js/components/LoginForm';

export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: ''
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
}

  render() {
    return (
      <View>
        <StatusBar />
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
