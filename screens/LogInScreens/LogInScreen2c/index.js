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

class LogInScreen2c extends Component {
  state = {
    email: '',
    isFocused: false,
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuIcon}
            onPressOut={() => navigation.goBack(null)}>
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
            이메일 주소를 입력해 주세요.
          </Text>
          <TextInput
            placeholder="이메일 주소"
            autoFocus={true}
            style={[
              styles.textInput,
              this.state.isFocused ? styles.focused : styles.unFocused,
            ]}
            autoCapitalize={'none'}
            autoCorrect={false}
            value={this.state.email}
            onChangeText={this._changeEmail}
            returnKeyType={'next'}
            keyboardType="email-address"
            onSubmitEditing={() => this._searchByEmail()}
            onEndEditing={this._onOutFocus}
            onFocus={this._onFocus}
            autoComplete={'email'}
            blurOnSubmit={true}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => this._searchByEmail()}>
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
        params: {catchFromAsk, username, password, name},
      },
    } = this.props;
    const {email} = this.state;
    navigation.navigate('LogIn2d', {
      password,
      catchFromAsk,
      username,
      name,
      email,
    });
  };

  _searchByEmail = () => {
    console.log('search by email 내부의 this.props', this.props);
    const {email} = this.state;
    const {
      route: {
        params: {guest_token},
      },
    } = this.props;

    console.log('search by email 내부의 guest_token', guest_token);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      Alert.alert('정확한 이메일 주소를 입력해 주세요.');
    } else {
      fetch(`${API_URL}/users/checkemail/?emailforcheck=${email}`, {
        headers: {
          Authorization: `JWT ${guest_token}`,
        },
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log('search by email 내부의 json', json);
          if (json.length === 0) {
            this._submit();
          } else {
            Alert.alert('이미 가입된 이메일입니다.');
          }
        });
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
  _changeEmail = text => {
    this.setState({
      email: text,
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

export default LogInScreen2c;
