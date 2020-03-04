import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {TEXT_COLOR, MAIN_COLOR} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

class ReviewItem extends Component {
  state = {};

  render() {
    const {uri, comment} = this.props;
    return (
      <View style={styles.container}>
        <Image source={uri} style={styles.image} />
        <Text style={styles.commentText}>{comment}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 5,
  },
  commentText: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontWeight: '200',
  },
});

export default ReviewItem;
