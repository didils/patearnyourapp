import React, {Component} from 'react';
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

const {width} = Dimensions.get('window');

class MainScreen extends Component {
  render() {
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
                <ScrollView
                  horizontal={true}
                  // pagingEnabled={true}
                  // decelerationRate={0}
                  // snapToInterval={width * 0.85} //your element width
                  // snapToAlignment={"start"}
                  // contentInset={{
                  //   top: 0,
                  //   left: width * 0.1,
                  //   bottom: 0,
                  //   right: width * 0.1
                  // }}
                  // contentContainerStyle={{flex: 1}}
                >
                  <View style={{width: width * 0.05}} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {this.props.myCase &&
                      this.props.myCase.map((cases, index) => (
                        <MainCase
                          cases={cases}
                          key={index}
                          navigation={this.props.navigation}
                          myProcessItem={this.props.myProcessItem}
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
                  onPressOut={() => this.props.navigation.navigate('Ask1')}>
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
            <TouchableOpacity onPressOut={this.props.checkLogIn}>
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
            <TouchableOpacity onPress={() => console.log('chekc')}>
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
            <TouchableOpacity onPress={() => console.log('chekc')}>
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
            <TouchableOpacity onPress={() => console.log('chekc')}>
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
            <TouchableOpacity onPress={() => console.log('chekc')}>
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
            </TouchableOpacity>
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
                comment={'정말 간편하고 좋았어요.'}
              />
            </View>
          </View>
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
