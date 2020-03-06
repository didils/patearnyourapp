import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {MAIN_COLOR, TEXT_COLOR} from '../../constants';

const {width} = Dimensions.get('window');

class AnswerComponent extends Component {
  render() {
    const {
      title,
      number,
      description,
      uri,
      additional,
      imageStyle,
      imagePadding,
      alignImage,
    } = this.props;
    return (
      <View style={styles.answerBox}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            paddingLeft: 25,
          }}>
          <View
            style={{
              backgroundColor: MAIN_COLOR,
              borderRadius: 4,
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}>
            <Text style={styles.numberButton}>{number}</Text>
          </View>
          <Text style={{fontSize: 23, fontWeight: '600', marginLeft: 13}}>
            {title}
          </Text>
        </View>
        <View
          style={{
            width,
            alignItems: alignImage,
            paddingBottom: imagePadding,
          }}>
          {uri !== null && (
            <Image source={uri} resizeMode={'contain'} style={imageStyle} />
          )}
        </View>
        <View style={{paddingHorizontal: 25}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '200',
              lineHeight: 25,
              marginBottom: 13,
            }}>
            {description}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '200',
              color: TEXT_COLOR,
              lineHeight: 22,
            }}>
            {additional}
          </Text>
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
    justifyContent: 'center',
  },
  numberButton: {color: 'white', fontSize: 16, fontWeight: 'bold'},
  answerBox: {
    width,
    paddingTop: 70,
  },
});

export default AnswerComponent;
