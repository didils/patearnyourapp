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
  KeyboardAvoidingView,
} from 'react-native';
import {API_URL, MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

class LogInScreen1 extends Component {
  state = {
    username: '',
    isFocused: false,
    isSubmitting: false,
  };

  componentDidMount = () => {
    this.guestLogin();
  };

  render() {
    const {
      navigation,
      route: {
        params: {catchFromAsk},
      },
    } = this.props;
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
            신규 또는 기존 아이디를 입력해 주세요.
          </Text>
          <TextInput
            placeholder="아이디"
            autoFocus={true}
            style={[
              styles.textInput,
              this.state.isFocused ? styles.focused : styles.unFocused,
            ]}
            autoCapitalize={'none'}
            autoCorrect={false}
            value={this.state.username}
            onChangeText={this._changeUsername}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this._searchByID();
              this._onOutFocus();
            }}
            onEndEditing={this._onOutFocus}
            onFocus={this._onFocus}
            blurOnSubmit={true}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPressOut={this._searchByID}>
            {this.state.isSubmitting ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.btnText}>확인</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
  _changeUsername = text => {
    this.setState({
      username: text,
    });
  };
  _searchByID = async () => {
    const {username, isSubmitting} = this.state;
    const {
      navigation,
      route: {
        params: {catchFromAsk},
      },
    } = this.props;
    if (!isSubmitting) {
      this.setState({
        isSubmitting: true,
      });
      if (username.length > 4) {
        const fetchResult = await fetch(
          `${API_URL}/users/check/?usernameforcheck=${username}`,
          {
            headers: {
              Authorization: `JWT ${this.state.guest_token}`,
            },
          },
        )
          .then(response => response.json())
          .then(json => {
            if (json.length == 0) {
              this.setState({
                isSubmitting: false,
              });
              return true;
            } else {
              this.setState({
                isSubmitting: false,
              });
              return false;
            }
          });
        if (fetchResult) {
          Alert.alert(
            '등록되어 있지 않습니다.',
            '회원가입 하시겠습니까?',
            [
              {
                text: '취소',
                style: 'cancel',
              },
              {
                text: '확인',
                onPress: () => {
                  navigation.navigate('LogIn2', {
                    catchFromAsk,
                    username,
                    guest_token: this.state.guest_token,
                  });
                },
              },
            ],
            {cancelable: true},
          );
        } else {
          navigation.navigate('LogIn3', {
            username: this.state.username,
            catchFromAsk,
            guest_token: this.state.guest_token,
          });
        }
      } else {
        this.setState({
          isSubmitting: false,
        });
        Alert.alert('아이디가 너무 짧습니다!');
      }
    }
  };
  guestLogin = () => {
    fetch(`${API_URL}/rest-auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'guest',
        password: 'qudwns12',
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          this.setState({
            guest_token: json.token,
          });
        }
        console.log(this.state.guest_token);
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

export default LogInScreen1;
