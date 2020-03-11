import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import TagItem from '../../../components/TagItem';
import {question} from '../../../question';
import QuestionItem from '../../../components/QuestionItem';

const {width, height} = Dimensions.get('window');

class HelpScreen2 extends Component {
  _searchByKeyword = () => {};
  render() {
    const {
      navigation,
      route: {
        params: {item},
      },
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
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
        <View
          style={{
            flexDirection: 'row',
            width,
            padding: 15,
            paddingBottom: 30,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: 'lightgrey',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
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
          <View style={{flex: 8, marginLeft: 10, paddingTop: 3}}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width,
            padding: 15,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
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
              <Text style={{fontWeight: 'bold', fontSize: 16}}>A</Text>
            </View>
          </View>
          <View style={{flex: 8, marginLeft: 10, paddingTop: 3}}>
            <Text style={styles.text}>{item.answer}</Text>
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
    paddingHorizontal: 25,
    height: width * 0.36,
  },
  menuIcon: {
    padding: 17,
  },
  text: {color: 'black', fontSize: 17, lineHeight: 26, fontWeight: '400'},
});

export default HelpScreen2;
