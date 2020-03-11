import React, {Component} from 'react';
import {Alert} from 'react-native';
import LogInScreen2d from './presenter';

class Container extends Component {
  state = {
    phone: '010',
    isSubmitting: false,
    isFocused: false,
    hide: true,
  };
  render() {
    return (
      <LogInScreen2d
        {...this.props}
        {...this.state}
        handleSubmit={this._handleSubmit}
        onFocus={this._onFocus}
        onOutFocus={this._onOutFocus}
        changePhone={this._changePhone}
        hide={this.state.hide}
        showPopup={this._showPopup}
        hidePopup={this._hidePopup}
      />
    );
  }

  _hidePopup = () => {
    this.setState({
      hide: true,
    });
  };

  _showPopup = () => {
    console.log('shiw popup');
    this.setState({
      hide: false,
    });
  };

  _onFocus = () => {
    this.setState({
      isFocused: true,
    });
  };
  _onOutFocus = () => {
    this.setState({
      isFocused: false,
    });
  };
  _changePhone = text => {
    this.setState({
      phone: text,
    });
  };
  _handleSubmit = async () => {
    const {isSubmitting, phone, fcmToken} = this.state;
    const {
      createAccount,
      navigation,
      route: {
        params: {password, username, name, email, catchFromAsk},
      },
    } = this.props;
    if (!isSubmitting) {
      this.setState({
        isSubmitting: true,
      });
      const createAccountResult = await createAccount(
        username,
        password,
        email,
        name,
        phone,
      );
      if (!createAccountResult) {
        Alert.alert('아이디 또는 비밀번호를 다시 확인해 주세요');
        this.setState({isSubmitting: false});
      } else {
        this._showPopup();
      }
    }
  };
}

export default Container;
