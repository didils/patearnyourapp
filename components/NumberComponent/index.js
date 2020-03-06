import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {MAIN_COLOR, TEXT_COLOR} from '../../constants';

const {width} = Dimensions.get('window');

class NumberComponent extends Component {
  render() {
    const {number, description1, description2, fontSize} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text
            style={{
              fontSize: fontSize,
              fontWeight: 'bold',
              color: MAIN_COLOR,
            }}>
            {number}
          </Text>
          <Text style={styles.textTitle}>{description1}</Text>
        </View>
        <View style={styles.lower}>
          <View>
            <Text style={styles.textDescription}>{description2}</Text>
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
    justifyContent: 'center',
    width,
    paddingTop: 70,
  },
  upper: {
    flexDirection: 'row',
    width,
    paddingHorizontal: 25,
    alignItems: 'flex-end',
  },
  lower: {
    paddingHorizontal: 25,
  },
  textDescription: {
    fontSize: 17,
    fontWeight: '200',
    lineHeight: 25,
    marginBottom: 13,
  },
  textTitle: {
    color: MAIN_COLOR,
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default NumberComponent;
