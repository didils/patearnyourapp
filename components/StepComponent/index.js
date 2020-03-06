import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {MAIN_COLOR, TEXT_COLOR} from '../../constants';

const {width} = Dimensions.get('window');

class DetailItem extends Component {
  render() {
    const {body} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          paddingBottom: 6,
        }}>
        <Text style={{marginRight: 5}}>•</Text>
        <View style={{width: width * 0.6}}>
          <Text style={{fontSize: 16, color: TEXT_COLOR}}>{body}</Text>
        </View>
      </View>
    );
  }
}

class StepComponent extends Component {
  render() {
    const {title, description1, description2, step} = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: '#FAFAFA',
            width: width * 0.24,
            height: 200,
            borderRightColor: MAIN_COLOR,
            borderRightWidth: 2,
          }}
        />
        <View style={styles.upper}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View
              style={{
                position: 'absolute',
                right: -5,
                top: -10,
                backgroundColor: 'white',
                width: 46,
                height: 46,
                borderRadius: 23,
              }}
            />
            <Text style={styles.step}>{step}</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.stepTitle}>{title}</Text>
          </View>
        </View>
        <View style={styles.lower}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 3, paddingLeft: 25}}>
            <DetailItem body={description1} />
            {description2 !== null && description2 !== '' && (
              <DetailItem body={description2} />
            )}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width,
    paddingTop: 40,
  },
  upper: {
    flexDirection: 'row',
    width,
    paddingHorizontal: 25,
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  lower: {
    flexDirection: 'row',
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
  step: {
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: 18,
    color: TEXT_COLOR,
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
  },
});

export default StepComponent;
