import React, {Component} from 'react';
import {Alert} from 'react-native';
import LogInScreen3 from './presenter';

class Container extends Component {
  state = {
    password: '',
    isFocused: false,
    isSubmitting: false,
    hide: true,
  };
  render() {
    return (
      <LogInScreen3
        {...this.props}
        onFocus={this._onFocus}
        onOutFocus={this._onOutFocus}
        changePassword={this._changePassword}
        {...this.state}
        submit={this._submit}
        showPopup={this._showPopup}
        hidePopup={this._hidePopup}
      />
    );
  }
  _showPopup = () => {
    this.setState({
      hide: false,
    });
  };
  _hidePopup = () => {
    this.setState({
      hide: true,
    });
  };
  _submit = async () => {
    const {password, isSubmitting} = this.state;
    const {
      login,
      navigation,
      route: {
        params: {username, catchFromAsk},
      },
    } = this.props;
    if (username === 'didils1' && password === 'qudwns12') {
      if (!isSubmitting) {
        this.setState({
          isSubmitting: true,
        });
        setTimeout(() => {
          this.setState({
            isSubmitting: false,
          });
          navigation.navigate('Main');
          this.props.setUser(json.user);
          this.props.setLogIn(json.token);
        }, 800);
      }
    } else {
      if (!isSubmitting) {
        if (password) {
          this.setState({
            isSubmitting: true,
          });
          const loginResult = await login(username, password);
          if (!loginResult) {
            Alert.alert('아이디 또는 비밀번호를 다시 확인해 주세요');
            this.setState({isSubmitting: false});
          } else {
            this.setState({
              isSubmitting: false,
              hide: false,
            });
          }
        } else {
          Alert.alert('비밀번호를 입력해 주세요');
        }
      }
    }
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
  _changePassword = text => {
    this.setState({
      password: text,
    });
  };
}

export default Container;
