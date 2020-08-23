import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from './aws-exports';
import { NavigationActions } from 'react-navigation';
import { AppContainer } from './src/router/index';

Amplify.configure(awsConfig)

class App extends React.Component {
  checkAuth = async () => {
    try {
      await Auth.currentSession()
    } catch (err) {
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName: 'Auth' })
      )
    }
  }
  render() {
    return (
      <AppContainer
        ref={nav => this.navigator = nav}
        onNavigationStateChange={this.checkAuth}
      />
    )
  }
}

export default App