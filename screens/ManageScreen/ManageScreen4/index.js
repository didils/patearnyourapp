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

class ManageScreen4 extends Component {
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
    flex: 1,
    backgroundColor: 'white',
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

export default ManageScreen4;
