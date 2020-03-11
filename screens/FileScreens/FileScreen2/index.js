import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import {TextInputMask} from 'react-native-masked-text';

const {width, height} = Dimensions.get('window');

class FileScreen2 extends Component {
  state = {
    patentApplicantNumber: null,
    ispatentApplicantNumberValid: false,
    isFocused: false,
    patentApplicantNumber: null,
  };

  changePatentApplicantNumber = text => {
    this.setState({patentApplicantNumber: text});
  };

  checkPatentApplicantNumber = () => {
    const {patentApplicantNumber} = this.state;
    const {
      navigation,
      route: {
        params: {identification_number},
      },
    } = this.props;
    if (patentApplicantNumber !== null && patentApplicantNumber.length === 15) {
      navigation.navigate('File3', {
        identification_number,
        patentApplicantNumber,
      });
    } else {
      Alert.alert('특허고객번호를 다시 확인해 주세요!');
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

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPressOut={() => navigation.goBack(null)}>
            <View style={styles.menuIcon}>
              <Icon name="ios-arrow-back" size={26} color="black" />
            </View>
          </TouchableOpacity>
          <Image
            style={{width: width * 0.26}}
            source={require('../../../assets/images/logo.jpeg')}
            resizeMode={'contain'}
          />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.bottom}>
            <View style={styles.stepTitle}>
              <Text style={[styles.stepText, {color: 'black'}]}>
                특허고객번호 입력
              </Text>
            </View>
            <Text style={styles.explain}>특허고객번호를 입력해 주세요.</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.btnContainer}>
          <TextInputMask
            ref="patentApplicantNumber"
            type={'custom'}
            keyboardType="numeric"
            placeholder="4-0000-000000-0"
            options={{
              mask: '9-9999-999999-9',
            }}
            autoFocus={true}
            value={this.state.patentApplicantNumber}
            onChangeText={this.changePatentApplicantNumber}
            style={[
              styles.textInput,
              this.state.isFocused ? styles.focused : styles.unFocused,
            ]}
            onFocus={this._onFocus}
            onEndEditing={() => {
              this._onOutFocus();
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => this.checkPatentApplicantNumber()}>
            <Text style={styles.btnText}>다음</Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={{height: 500, width}}></View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
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
  textInput: {
    fontSize: 16,
    width: width * 0.85,
    borderBottomWidth: 1,
    padding: 14,
    color: MAIN_COLOR,
    marginTop: 15,
  },

  bottom: {
    paddingLeft: 25,
    width,
    height: width * 0.36,
    alignItems: 'flex-start',
  },
  menuIcon: {
    padding: 17,
  },
  stepTitle: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  stepText: {
    fontSize: 23,
    fontWeight: '300',
    marginRight: 10,
  },
  explain: {
    fontSize: 17,
    fontWeight: '200',
    color: TEXT_COLOR,
  },
  process: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  btnContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: MAIN_COLOR,
    width,
    height: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    width: width * 0.93,
    borderRadius: 3,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
  },
  focused: {
    borderBottomColor: MAIN_COLOR,
  },
  unFocused: {
    borderBottomColor: 'lightgrey',
  },
});

export default FileScreen2;
