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
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import AddressComponent from '../../../components/AddressComponent';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

class FileScreen4 extends Component {
  state = {
    address: [],
    isSubmitting: false,
    isSelected: false,
    keyword: '',
    zipNo: '',
    roadAddr: '',
    restAddress: '',
  };

  _changeRestAddress = text => {
    this.setState({
      restAddress: text,
    });
  };

  _changeKeyword = text => {
    this.setState({
      keyword: text,
      isSelected: false,
      address: [],
    });
  };

  _getAddress = async () => {
    this.setState({
      isSubmitting: true,
    });
    const {keyword} = this.state;
    if (keyword === '') {
      Alert.alert('주소 검색을 위한 키워드를 입력해 주세요');
      this.setState({
        isSubmitting: true,
      });
    } else {
      const address = await this._callApi(keyword);
      this.setState({
        address,
        isSubmitting: false,
      });
      Keyboard.dismiss();
    }
  };

  _callApi = keyword => {
    return fetch(
      `https://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=10&keyword=${keyword}&confmKey=U01TX0FVVEgyMDE4MTIwMzAxMTU1OTEwODM0MjY=&resultType=json`,
    )
      .then(response => {
        return response.json();
      })
      .then(json => json.results.juso);
  };

  _setAddr = (zipNo, roadAddrPart1) => {
    this.setState({
      zipNo,
      roadAddr: roadAddrPart1,
      isSelected: true,
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

  render() {
    const {
      navigation,
      route: {
        params: {
          assignType,
          logo,
          patentApplicantNumber,
          identification_number,
        },
      },
    } = this.props;
    const {address, zipNo, roadAddr} = this.state;

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
              <Text style={[styles.stepText, {color: 'black'}]}>주소</Text>
            </View>
            <Text style={styles.explain}>
              우편을 수령 받을 수 있는 주소를 입력해 주세요.
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.btnContainer}>
          <TextInput
            placeholder="예) 매헌로6길, 분당 주공, 삼평동 681 등"
            style={[
              styles.textInput,
              this.state.isFocused ? styles.focused : styles.unFocused,
            ]}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoFocus={true}
            value={this.state.keyword}
            onChangeText={this._changeKeyword}
            returnKeyType={'done'}
            onSubmitEditing={() => {
              this._onOutFocus();
              this._getAddress();
            }}
            onEndEditing={this._onOutFocus}
            onFocus={this._onFocus}
            blurOnSubmit={true}
          />
        </View>
        {this.state.isSelected ? (
          <View style={{paddingTop: 20}}>
            <Text
              style={{
                color: 'grey',
                fontSize: 14,
                fontWeight: '500',
                marginBottom: 5,
              }}>
              나머지 주소를 입력해주세요.
            </Text>
            <View style={[styles.selectedBox, {backgroundColor: '#F5F5F5'}]}>
              <Text style={{fontSize: 17, fontWeight: '300'}}>{roadAddr}</Text>
            </View>
            <TextInput
              style={[styles.selectedBox]}
              placeholder="나머지 주소를 입력해주세요."
              autoCapitalize={'none'}
              autoCorrect={false}
              autoFocus={true}
              value={this.state.restAddress}
              onChangeText={this._changeRestAddress}
              returnKeyType={'done'}
              onSubmitEditing={() => {
                this._onOutFocus();
                this._getAddress();
              }}
              onEndEditing={this._onOutFocus}
              onFocus={this._onFocus}
              blurOnSubmit={true}
            />
          </View>
        ) : (
          <ScrollView>
            <View>
              {address &&
                address.length !== 0 &&
                address.map((item, index) => (
                  <AddressComponent
                    navigation={navigation}
                    item={item}
                    key={index}
                    assignType={assignType}
                    logo={logo}
                    patentApplicantNumber={patentApplicantNumber}
                    identification_number={identification_number}
                    setAddr={this._setAddr}
                  />
                ))}
              <View style={{height: 280}} />
            </View>
          </ScrollView>
        )}
        <TouchableOpacity style={styles.button} onPress={this._getAddress}>
          {this.state.isSubmitting ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.btnText}>확인</Text>
          )}
        </TouchableOpacity>
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
    height: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
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
  selectedBox: {
    fontWeight: '300',
    fontSize: 17,
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: width * 0.9,
    borderRadius: 5,
    borderColor: 'lightgrey',
    marginVertical: 5,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default FileScreen4;
