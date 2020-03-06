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
import {Rating, AirbnbRating} from 'react-native-ratings';

const {width} = Dimensions.get('window');

class ReviewItem extends Component {
  state = {
    expanded: false,
    name: 'ios-arrow-forward',
  };

  componentDidMount() {
    const {comment} = this.props;
    if (comment.length > 45) {
      this.setState({
        comment: `${comment.substr(0, 45)}...`,
      });
    } else {
      this.setState({
        comment,
      });
    }
  }

  switch = () => {
    if (this.state.expanded) {
      this.setState({
        expanded: false,
        name: 'ios-arrow-forward',
      });
    } else {
      this.setState({
        expanded: true,
        name: 'ios-arrow-down',
      });
    }
  };

  render() {
    const {uri, product} = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Image source={uri} style={styles.image} resizeMode={'contain'} />
          {/* <Text style={styles.product}>{product}</Text> */}
        </View>
        <View style={styles.rightBox}>
          <Rating
            showRating={false}
            readonly={true}
            imageSize={10}
            startingValue={5}
          />
          <View style={{width: width * 0.55}}>
            <Text style={styles.product}>{product}</Text>
            {this.state.expanded ? (
              <Text style={styles.commentText}>{this.props.comment}</Text>
            ) : (
              <Text style={styles.commentText}>{this.state.comment}</Text>
            )}
            {this.props.comment.length > 45 && (
              <TouchableOpacity
                onPress={() => this.switch()}
                style={{position: 'absolute', top: 60, right: -25}}>
                <View
                  style={{
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon name={this.state.name} size={25} color={MAIN_COLOR} />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  rightBox: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 5,
    borderColor: TEXT_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
  },
  commentText: {
    fontSize: 15,
    color: TEXT_COLOR,
    fontWeight: '200',
    flex: 1,
  },
  product: {
    fontSize: 15,
    color: 'grey',
    fontWeight: '300',
    flex: 1,
    paddingVertical: 5,
  },
});

export default ReviewItem;
