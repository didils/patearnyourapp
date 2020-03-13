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
import {MAIN_COLOR, TEXT_COLOR} from '../../constants';

const {width, height} = Dimensions.get('window');

class AddressComponent extends Component {
  render() {
    const {navigation, item, setAddr} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setAddr(item.zipNo, item.roadAddrPart1);
          }}>
          <View style={styles.button}>
            <Text style={{fontWeight: '300', fontSize: 22, marginBottom: 15}}>
              {item.zipNo}
            </Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.text, {flex: 1}]}>도로명</Text>
                <Text style={[styles.text, {flex: 5}, {color: TEXT_COLOR}]}>
                  {item.roadAddrPart1}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.text, {flex: 1}]}>지번</Text>
                <Text style={[styles.text, {flex: 5}, {color: TEXT_COLOR}]}>
                  {item.jibunAddr}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width,
    alignItems: 'center',
  },
  button: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 25,
    paddingHorizontal: 20,
    width: width * 0.85,
  },
  text: {
    fontWeight: '200',
    fontSize: 14,
    paddingVertical: 3,
  },
});

export default AddressComponent;
