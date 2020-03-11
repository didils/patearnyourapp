import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';

const {width, height} = Dimensions.get('window');

class FastExamScreen4 extends Component {
  render() {
    const {navigation} = this.props;
    const {
      uploadFastExam,
      route: {
        params: {images, identification_number, pdf},
      },
    } = this.props;
    console.log('fastexam4 props', this.props);
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
        <View style={styles.bottom}>
          <View
            style={{
              paddingHorizontal: 25,
              marginBottom: 80,
            }}>
            <View style={styles.stepTitle}>
              <Text style={[styles.stepText, {color: 'black'}]}>결제</Text>
            </View>
            <Text style={styles.explain}>
              아래 결제 내역을 확인 후, 진행 해 주세요.
            </Text>
          </View>
          <View style={styles.payContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                paddingHorizontal: 20,
                marginBottom: 10,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 25, marginRight: 15}}>
                우선 심사 신청
              </Text>
              <TouchableOpacity onPress={() => this.props.toggle()}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: 'lightgrey',
                      marginRight: 6,
                    }}>{`상세비용 ${this.props.explain}`}</Text>
                  <Icon
                    name={this.props.iconName}
                    size={19}
                    color="lightgrey"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#FAFAFA',
              }}>
              {this.props.isExtended && (
                <View style={{paddingTop: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 20,
                      paddingTop: 10,
                    }}>
                    <Text
                      style={{
                        fontWeight: '200',
                        fontSize: 12,
                        color: TEXT_COLOR,
                      }}>
                      특허청 수수료
                    </Text>
                    <Text style={{fontWeight: '300', fontSize: 12}}>
                      160,000원
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 20,
                      paddingTop: 10,
                    }}>
                    <Text
                      style={{
                        fontWeight: '200',
                        fontSize: 12,
                        color: TEXT_COLOR,
                      }}>
                      변리사 수임료
                    </Text>
                    <Text style={{fontWeight: '300', fontSize: 12}}>
                      240,000원
                    </Text>
                  </View>
                  <View
                    style={{
                      width,
                      alignItems: 'center',
                      marginTop: 20,
                      marginBottom: 10,
                    }}>
                    <View
                      style={{
                        width: width - 30,
                        height: StyleSheet.hairlineWidth,
                        backgroundColor: 'grey',
                      }}></View>
                  </View>
                </View>
              )}
              <View style={styles.payItemComtainer}>
                <Text
                  style={{fontWeight: '300', fontSize: 15, color: TEXT_COLOR}}>
                  총 결제 금액
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  400,000원
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('Pay1', {
                  pay_type: '우선심사',
                  images,
                  identification_number,
                  pdf,
                })
              }>
              {this.props.isSubmitting ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={styles.btnText}>결제</Text>
              )}
            </TouchableOpacity>
          </View>
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
  bottom: {
    height: width * 0.36,
    paddingTop: 20,
    width,
    height: height - width * 0.16 - 10,
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
  button: {
    backgroundColor: MAIN_COLOR,
    width: width * 0.93,
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
  btnContainer: {
    alignItems: 'center',
    marginBottom: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
  },
  payContainer: {paddingHorizontal: 0},
  payItemComtainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default FastExamScreen4;
