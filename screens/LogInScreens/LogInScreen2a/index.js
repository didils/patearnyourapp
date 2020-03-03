import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {API_URL, MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

class LogInScreen2a extends Component {
  state = {
    passwordRe: '',
    isFocused: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuIcon}
            onPressOut={() => this.props.navigation.goBack(null)}>
            <Icon name="ios-arrow-back" size={26} color="black" />
          </TouchableOpacity>
          <Image
            style={{width: width * 0.26}}
            source={require('../../../assets/images/logo.jpeg')}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.body}>
          <Text style={{margin: 20, fontSize: 15}}>
            비밀번호를 한 번 더 입력해 주세요.
          </Text>
          <TextInput
            placeholder="비밀번호 재입력"
            autoFocus={true}
            style={[
              styles.textInput,
              this.state.isFocused ? styles.focused : styles.unFocused,
            ]}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.passwordRe}
            onChangeText={this._changePasswordRe}
            returnKeyType={'next'}
            onSubmitEditing={() => this._submit()}
            onEndEditing={this._onOutFocus}
            onFocus={this._onFocus}
            blurOnSubmit={true}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => this._submit()}>
            <Text style={styles.btnText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  _submit = () => {
    const {
      navigation,
      route: {
        params: {catchFromAsk, username, password, guest_token},
      },
    } = this.props;
    const {passwordRe} = this.state;
    if (password === passwordRe) {
      navigation.navigate('LogIn2b', {
        password,
        catchFromAsk,
        username,
        guest_token,
      });
    } else {
      Alert.alert('비밀번호가 다릅니다.');
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
  _changePasswordRe = text => {
    this.setState({
      passwordRe: text,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 5,
  },
  header: {
    backgroundColor: 'white',
    width,
    height: width * 0.16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 18,
    marginTop: 10,
  },
  menuIcon: {
    padding: 17,
  },
  body: {
    alignItems: 'center',
    paddingTop: 20,
  },
  textInput: {
    fontSize: 16,
    width: width * 0.85,
    borderBottomWidth: 1,
    padding: 14,
    color: MAIN_COLOR,
    marginTop: 15,
  },
  focused: {
    borderBottomColor: MAIN_COLOR,
  },
  unFocused: {
    borderBottomColor: 'lightgrey',
  },
  btnContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: MAIN_COLOR,
    width: width * 0.8,
    height: width * 0.12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 57,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
  },
});

export default LogInScreen2a;
