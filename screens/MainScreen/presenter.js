import React, {Component, useReducer} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../constants';
import MainCase from '../../components/MainCase';
import ReviewItem from '../../components/ReviewItem';
import {ChannelIO} from 'react-native-channel-plugin';

const {width} = Dimensions.get('window');

class MainScreen extends Component {
  state = {
    expectDate: '',
  };

  componentDidMount() {
    var dt = new Date();
    dt.setMonth(dt.getMonth() + 7);
    const textDate = `${dt.getFullYear()}년 ${dt.getMonth()}월`;
    this.setState({
      expectDate: textDate,
    });
  }

  async sendNotification() {
    const FIREBASE_API_KEY =
      'AAAAVMLwCz8:APA91bExwuSnhMzBFRiqkDwYPjXFp5uDlF9Xg5fmIpzpVnBjPbCvl_CE8uzGZw1u0_DdY5bob3CKf-mEJ_Lap5mYszae7B2m9iOIIfLjalFTIP4YuV424EWF56rEjp4E74mfewtbOIMr';
    const message = {
      registration_ids: [
        'eyYSaIDaR62k0s8XxoQKtw:APA91bFAMk6Oq5dP3S_LIOz8a-UwZBxvaVOPZAvSxQnu1pB1eDiccZDIIN7_eUl-iNvgyaG0WpWJ0yGBA6ctkuoMxXjsL2khwAAXIeLBeM4K5_CERKbaHbrxykarKGdNDmVsa2oOOSL9',
      ],
      notification: {
        title: '테스트 제목',
        body: '테스트 본문',
        vibrate: 1,
        sound: 1,
        show_in_foregroud: true,
        priority: 'high',
        content_available: true,
      },
    };

    let headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'key=' + FIREBASE_API_KEY,
    });

    let response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers,
      body: JSON.stringify(message),
    });
    response = await response.json();
  }

  render() {
    const {navigation, user} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuIcon}
            onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="ios-menu" size={26} color="black" />
          </TouchableOpacity>
          <Image
            style={{width: width * 0.26}}
            source={require('../../assets/images/logo.jpeg')}
            resizeMode={'contain'}
          />
        </View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {this.props.myCase && this.props.myCase.length > 0 ? (
            <View style={{alignItems: 'center'}}>
              <View style={{width, paddingLeft: 20}}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                  내 브랜드
                </Text>
              </View>
              <View
                style={{
                  height: width * 0.55,
                }}>
                <ScrollView horizontal={true}>
                  <View style={{width: width * 0.05}} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {this.props.myCase &&
                      this.props.myCase.map((cases, index) => (
                        <MainCase
                          user={user}
                          cases={cases}
                          key={index}
                          navigation={this.props.navigation}
                        />
                      ))}
                  </View>
                  <View style={{width: width * 0.1}} />
                </ScrollView>
              </View>
              <View style={styles.mainBtnAdded}>
                <View>
                  <Text style={styles.textBtnAdded}>나만의 브랜드를</Text>
                  <Text style={styles.textBtnAdded}>등록하세요.</Text>
                </View>
                <TouchableOpacity
                  onPressOut={() => {
                    ChannelIO.hide(true);
                    this.props.navigation.navigate('Ask1');
                  }}>
                  <View style={styles.iconContainerAdded}>
                    <Icon
                      name="ios-add"
                      size={16}
                      color="white"
                      style={{marginRight: 4}}
                    />
                    <Text style={styles.btnTextAdded}>새 브랜드 등록</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              onPressOut={() => {
                ChannelIO.hide(true);
                this.props.checkLogIn();
              }}>
              <View style={styles.mainBtn}>
                <View>
                  <Text style={styles.textBtn}>나만의 브랜드를</Text>
                  <Text style={styles.textBtn}>등록하세요.</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Text style={styles.btnText}>신청하기</Text>
                  <Icon
                    name="ios-arrow-round-forward"
                    size={29}
                    color="white"
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginTop: 5,
                  }}>
                  <Text style={{color: 'white', marginRight: 3}}>
                    지금 신청 시
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 4,
                      paddingHorizontal: 5,
                      paddingVertical: 3,
                      opacity: 0.7,
                    }}>
                    <Text style={{fontWeight: '500'}}>
                      {this.state.expectDate}
                    </Text>
                  </View>
                  <Text style={{color: 'white', marginLeft: 3}}>등록!</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          <View
            style={{
              width,
              alignItems: 'center',
              borderRadius: 5,
              borderTopColor: '#f0f0f0',
              borderTopWidth: 10,
              paddingTop: 15,
            }}>
            <View style={{width}}>
              <Text
                style={{
                  color: TEXT_COLOR,
                  fontWeight: '500',
                  fontSize: 25,
                  padding: 20,
                }}>
                유용한 정보
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.sendNotification();
                // ChannelIO.hide(true);
                // navigation.navigate('Inform1');
              }}>
              <View style={styles.mainBtnBottom}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={styles.textBtnBottomTitle}>상표등록</Text>
                  <Text style={styles.textBtnBottom}>
                    상표 등록은 왜 해야하죠?
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ChannelIO.hide(true);
                navigation.navigate('Inform2');
              }}>
              <View style={styles.mainBtnBottom}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={styles.textBtnBottomTitle}>비용/기간</Text>
                  <Text style={styles.textBtnBottom}>
                    숫자로 알아보는 상표 출원
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ChannelIO.hide(true);
                navigation.navigate('Inform3');
              }}>
              <View style={styles.mainBtnBottom}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={styles.textBtnBottomTitle}>절차</Text>
                  <Text style={styles.textBtnBottom}>
                    등록 절차가 어떻게 되나요?
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Inform4')}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: width * 0.9,
                  paddingVertical: 20,
                  paddingLeft: 3,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={styles.textBtnBottomTitle}>담당</Text>
                  <Text style={styles.textBtnBottom}>누가 관리해 주나요?</Text>
                </View>
              </View>
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              width,
              alignItems: 'center',
              borderRadius: 5,
              borderTopColor: '#f0f0f0',
              borderTopWidth: 10,
              paddingTop: 15,
            }}>
            <View style={{width}}>
              <Text
                style={{
                  color: TEXT_COLOR,
                  fontWeight: '500',
                  fontSize: 25,
                  padding: 20,
                }}>
                브랜드 등록 후기
              </Text>
              <ReviewItem
                uri={require('../../assets/images/4020160108616.jpg')}
                comment={
                  '신청하는데 어렵지도 않고, 신뢰할 수 있어 좋은 것 같습니다. 번창하세요~!'
                }
                product={'Youtuber/Creator'}
              />
              <ReviewItem
                uri={require('../../assets/images/4120160040231.jpg')}
                comment={
                  '진짜 열심히 해주시는게 느껴졌습니다. 주변에 많이 추천할께요~~ 감사합니다!'
                }
                product={'네일샵'}
              />
              <ReviewItem
                uri={require('../../assets/images/logo.jpeg')}
                comment={
                  '가격은 다른데 더 싼 곳들 많이 있긴 하지만, 여기가 더 편리하고 좋은듯 ㅎㅎ 주변에 많이 추천할께요~~ 감사합니다!'
                }
                product={'카페'}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 20,
                }}>
                <Text style={{color: 'grey', fontSize: 17, fontWeight: '200'}}>
                  후기 더보기
                </Text>
                <Icon
                  name={'ios-arrow-down'}
                  color={'grey'}
                  size={16}
                  style={{marginLeft: 13}}
                />
              </View>
            </View>
          </View>
          {this.props.profile &&
            this.props.profile.email === 'didils1982@gmail.com' && (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Manage1', {
                    token: user.token,
                  })
                }>
                <View
                  style={{
                    backgroundColor: MAIN_COLOR,
                    borderRadius: 5,
                    width: width / 2,
                    paddingVertical: 10,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 20, fontWeight: '300', color: 'white'}}>
                    관리자 메뉴
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          <View style={{height: 100, backgroundColor: '#fAFAFA', width}}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    width,
    height: width * 0.2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  mainBtn: {
    backgroundColor: MAIN_COLOR,
    width: width * 0.91,
    height: width * 0.5,
    borderRadius: 6,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  mainBtnBottom: {
    backgroundColor: 'white',
    width: width * 0.9,
    paddingVertical: 20,
    paddingLeft: 3,
    justifyContent: 'space-between',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textBtnBottom: {
    fontSize: 17,
    fontWeight: '200',
    color: TEXT_COLOR,
  },
  textBtnBottomTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: MAIN_COLOR,
    width: width * 0.25,
  },
  mainBtnBottomLeft: {
    backgroundColor: '#FAFAFA',
    borderColor: TEXT_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
    width: width * 0.44,
    borderRadius: width * 0.01,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    justifyContent: 'space-between',
    marginTop: 25,
  },
  textBtnBottomLeft: {
    fontSize: 19,
    fontWeight: '300',
    color: TEXT_COLOR,
  },
  mainBtnCase: {
    backgroundColor: '#FAFAFA',
    width: width * 0.91,
    height: width * 0.4,
    borderRadius: width * 0.01,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  mainBtnAdded: {
    backgroundColor: 'white',
    width,
    borderRadius: width * 0.01,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopColor: 'lightgrey',
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
  },
  menuIcon: {
    padding: 17,
  },
  scrollView: {
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 29,
    fontWeight: '500',
    color: 'white',
  },
  textBtnAdded: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconContainerAdded: {
    backgroundColor: MAIN_COLOR,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 110,
    height: 40,
    borderRadius: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 5,
  },
  btnTextAdded: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    marginRight: 5,
  },
});

export default MainScreen;
