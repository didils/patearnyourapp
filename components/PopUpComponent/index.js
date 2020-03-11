import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {MAIN_COLOR, TEXT_COLOR} from '../../constants';

const {width, height} = Dimensions.get('window');

class PopUpComponent extends Component {
  render() {
    const {title, body, onConfirm, hide, onCancel} = this.props;
    if (hide) {
      return null;
    } else if (!hide) {
      return (
        <View style={styles.container}>
          <View
            style={{
              width: width * 0.84,
              height: width * 0.65,
              justifyContent: 'space-between',
              backgroundColor: 'white',
              marginTop: width * 0.55,
              borderRadius: 5,
            }}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.body}>{body}</Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={() => onCancel()}>
                <View style={[styles.button, {borderBottomLeftRadius: 5}]}>
                  <Text style={styles.btnText}>취소</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onConfirm();
                }}>
                <View style={[styles.button, {borderBottomRightRadius: 5}]}>
                  <Text style={styles.btnText}>확인</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    position: 'absolute',
    left: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  button: {
    width: width * 0.42,
    backgroundColor: MAIN_COLOR,
    height: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox: {
    height: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '400',
    fontSize: 19,
    marginBottom: 18,
    paddingHorizontal: 25,
  },
  body: {
    fontWeight: '400',
    color: TEXT_COLOR,
    fontSize: 16,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default PopUpComponent;
