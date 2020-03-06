import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';

const {width, height} = Dimensions.get('window');

class FastExamScreen1 extends Component {
  render() {
    const {navigation} = this.props;
    // const { navigation } = this.props;
    // const success = navigation.getParam("success");
    // const imp_uid = navigation.getParam("imp_uid");
    // const merchant_uid = navigation.getParam("merchant_uid");

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPressOut={() => navigation.navigate('Main')}>
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
          <View style={styles.stepTitle}>
            <Text style={[styles.stepText, {color: 'black'}]}>
              우선심사 사유 선택
            </Text>
          </View>
          <Text style={styles.explain}>
            아래 사유 중에서 해당하는 항목을 선택해 주세요.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => navigation.navigate('FastExam2')}>
            <Text style={styles.btnText}>사용 중 또는 곧 사용 예정입니다</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => navigation.navigate('Ask2a')}>
            <Text style={styles.btnText}>타인과 분쟁 중 입니다</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
  bottom: {
    paddingHorizontal: 25,
    height: width * 0.36,
    paddingTop: 20,
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
});

export default FastExamScreen1;
