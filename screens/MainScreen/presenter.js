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
import {MAIN_COLOR} from '../../constants';

const {width, height} = Dimensions.get('window');

class MainScreen extends Component {
  render() {
    const {isLoggedIn} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuIcon}>
              <Icon name="ios-menu" size={26} color="black" />
            </TouchableOpacity>
            {isLoggedIn ? (
              <Image
                style={{width: width * 0.26}}
                source={require('../../assets/images/logo.jpeg')}
                resizeMode={'contain'}
              />
            ) : (
              <Text>로그인안됨</Text>
            )}
          </View>
          {this.props.isCase ? (
            <View style={{alignItems: 'center'}}>
              <View style={{width, padding: 15}}>
                <Text style={{fontSize: 17}}>내 브랜드</Text>
              </View>
              <TouchableOpacity
                onPressOut={() => this.props.navigation.navigate('Ask1')}>
                <View style={styles.mainBtnCase}>
                  <Text>내 사건 상세</Text>
                </View>
              </TouchableOpacity>
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
    borderRadius: width * 0.01,
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
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 4,
    borderTopColor: 'lightgrey',
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
  },
  menuIcon: {
    marginHorizontal: 17,
    marginVertical: 17,
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