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

class QuestionItem extends Component {
  render() {
    const {title, navigation, item} = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Help2', {
            item,
          })
        }>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: '#f5f5f5',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Q</Text>
            </View>
          </View>
          <View style={{flex: 6, marginLeft: 10, paddingTop: 2}}>
            <Text style={styles.text}>{title}</Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'flex-end',
              paddingRight: 10,
              justifyContent: 'center',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Icon name={'ios-arrow-forward'} size={25} color={'lightgrey'} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    width: width * 0.9,
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  text: {color: 'black', fontSize: 17, lineHeight: 26, fontWeight: '500'},
});

export default QuestionItem;
