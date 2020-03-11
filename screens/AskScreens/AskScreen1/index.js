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
import {ChannelIO} from 'react-native-channel-plugin';

const {width, height} = Dimensions.get('window');
class AskScreen1 extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPressOut={() => {
              navigation.navigate('Main');
              ChannelIO.show(true);
            }}>
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
          <View style={styles.process}>
            <Icon
              name="md-home"
              size={16}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Icon
              name="ios-arrow-forward"
              size={16}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
          </View>
          <View style={styles.stepTitle}>
            <Text style={[styles.stepText, {color: MAIN_COLOR}]}>STEP 1</Text>
            <Text style={[styles.stepText, {color: 'black'}]}>
              브랜드 타입 지정
            </Text>
          </View>
          <Text style={styles.explain}>
            등록하고자 하는 브랜드의 타입이 무엇인가요?
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => navigation.navigate('Ask2')}>
            <Text style={styles.btnText}>로고 이미지</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => navigation.navigate('Ask2a')}>
            <Text style={styles.btnText}>텍스트</Text>
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

export default AskScreen1;
