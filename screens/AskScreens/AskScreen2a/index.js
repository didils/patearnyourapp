import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import ImagePicker from 'react-native-image-crop-picker';

const {width, height} = Dimensions.get('window');

class AskScreen2a extends Component {
  state = {
    imageSelected: false,
    photo: null,
    trademarkTitle: '',
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
        <View style={styles.bottom}>
          <View style={styles.process}>
            <Icon
              name="md-home"
              size={18}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Icon
              name="ios-arrow-forward"
              size={18}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Text style={{color: '#B2B2B2', marginRight: 6, fontSize: 15}}>
              브랜드 타입
            </Text>
            <Icon
              name="ios-arrow-forward"
              size={18}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
          </View>
          <View style={styles.stepTitle}>
            <Text style={[styles.stepText, {color: MAIN_COLOR}]}>STEP 2</Text>
            <Text style={[styles.stepText, {color: 'black'}]}>로고 입력</Text>
          </View>
          <Text style={styles.explain}>로고 텍스트를 입력 해 주세요.</Text>
        </View>
        <View style={styles.btnContainer}>
          <TextInput
            placeholder="상표명을 입력해 주세요. 예) 스타벅스, adidas"
            style={styles.textInput}
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={this._changeText}
            value={this.state.trademarkTitle}
            onEndEditing={() => {
              Keyboard.dismiss();
            }}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPressOut={this._onPressConfirm}>
            <Text style={styles.btnText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  _onPressConfirm = () => {
    const {trademarkTitle} = this.state;
    if (trademarkTitle !== '') {
      this.props.navigation.navigate('Ask3', {
        logoType: 'text',
        logo: trademarkTitle,
      });
    } else {
      Alert.alert('텍스트를 입력해 주세요.');
    }
  };
  _changeText = text => {
    this.setState({
      trademarkTitle: text,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    color: TEXT_COLOR,
    fontSize: 14,
    fontWeight: '600',
  },
  mainItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    padding: 15,
  },
  outText: {
    fontSize: 15,
    fontWeight: '600',
  },
  textInput: {
    width: width * 0.85,
    borderColor: 'lightgrey',
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    height: width * 0.13,
    marginBottom: 25,
    padding: 15,
    fontSize: 15,
  },
  outTextContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
  mainCategory: {
    backgroundColor: 'white',
    width: width * 0.95,
    borderRadius: 3,
    marginBottom: 15,
  },
  circle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: 2,
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 40,
    borderStyle: 'dashed',
  },
  circleImage: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 40,
    borderRadius: 8,
  },
  mainText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '200',
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
  bottom: {
    paddingHorizontal: 25,
    height: width * 0.4,
  },
  menuIcon: {
    marginHorizontal: 17,
    marginVertical: 17,
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
    width: width * 0.7,
    height: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 7,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
  },
});

export default AskScreen2a;
