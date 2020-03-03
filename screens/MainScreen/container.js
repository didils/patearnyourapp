import React, {Component} from 'react';
import MainScreen from './presenter';

class Container extends Component {
  render() {
    return <MainScreen {...this.props} checkLogIn={this._checkLogIn} />;
  }
  _checkLogIn = () => {
    const {isLoggedIn} = this.props;
    if (isLoggedIn) {
      this.props.navigation.navigate('Ask1');
    } else {
      this.props.navigation.navigate('LogIn1', {
        catchFromAsk: true,
      });
    }
  };
}

export default Container;
