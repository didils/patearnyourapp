import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class LogInScreen4 extends Component {
  render() {
    // const { navigation } = this.props;
    // const success = navigation.getParam("success");
    // const imp_uid = navigation.getParam("imp_uid");
    // const merchant_uid = navigation.getParam("merchant_uid");

    return (
      <View style={styles.container}>
        <Text>LogInScreen4</Text>
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
});

export default LogInScreen4;