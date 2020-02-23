import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {TEXT_COLOR} from '../../constants';

const {width} = Dimensions.get('window');

class ItemIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        onPressOut={() => {
          if (this.props.itemName !== 'blank') {
            this.props.iconNavigate(this.props.itemName);
          }
        }}>
        <View style={styles.container}>
          {this.props.itemName !== 'blank' ? (
            <View style={styles.circle}>
              <Text style={styles.text}>{this.props.itemName}</Text>
            </View>
          ) : (
            <View style={styles.blank}></View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  circle: {
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: StyleSheet.hairlineWidth,
    width: width / 4,
    height: width / 9,
    borderRadius: 2,
  },
  blank: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    width: width / 4,
    height: width / 8,
    borderRadius: 2,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 6,
  },
  text: {
    color: TEXT_COLOR,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ItemIcon;
