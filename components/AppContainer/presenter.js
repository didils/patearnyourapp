import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StatusBar,
  StyleSheet,
  AsyncStorage,
  Platform,
  Text,
  Dimensions,
} from 'react-native';

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };
  render() {
    const {isLoggedIn} = this.props;
    return (
      <View style={styles.container}>
        {isLoggedIn ? (
          <Text>로그인 되어 있음</Text>
        ) : (
          <Text>로그인 되어 있지 않음</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default AppContainer;
