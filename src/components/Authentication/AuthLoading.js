import React from 'react';
import { Auth } from 'aws-amplify';
import StyledActivityIndicator from '../Utils/StyledActivityIndicator';

export default class AuthLoadingScreen extends React.Component {
  state = {
    isMounted: true,
    userToken: null
  };

  componentDidMount() {
    this.setState({ isMounted: true })
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    await Auth.currentSession()
      .then(data => {
        if (this.state.isMounted) {
          this.setState({ userToken: data.accessToken.jwtToken })
        }
      })
      .catch(err => {
        if (this.state.isMounted) {
          this.setState({ userToken: null })
        }
      })
    this.props.navigation.navigate(this.state.userToken ? 'App' : 'Auth')
  };

  componentWillUnmount() {
    this.setState({ isMounted: false })
  }

  render() {
    return (
      <StyledActivityIndicator />
    );
  }
}