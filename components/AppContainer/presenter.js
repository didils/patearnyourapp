import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Dimensions, View, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LogInScreen1 from '../../screens/LogInScreens/LogInScreen1';
import LogInScreen2 from '../../screens/LogInScreens/LogInScreen2';
import LogInScreen2a from '../../screens/LogInScreens/LogInScreen2a';
import LogInScreen2b from '../../screens/LogInScreens/LogInScreen2b';
import LogInScreen2c from '../../screens/LogInScreens/LogInScreen2c';
import LogInScreen2d from '../../screens/LogInScreens/LogInScreen2d';
import LogInScreen3 from '../../screens/LogInScreens/LogInScreen3';
import ManageScreen1 from '../../screens/ManageScreen/ManageScreen1';
import ManageScreen2 from '../../screens/ManageScreen/ManageScreen2';
import ManageScreen3 from '../../screens/ManageScreen/ManageScreen3';
import ManageScreen4 from '../../screens/ManageScreen/ManageScreen4';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import StackScreen from '../../screens/StackScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {TEXT_COLOR, MAIN_COLOR} from '../../constants';

const {width, height} = Dimensions.get('window');
const Drawer = createDrawerNavigator();
class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };
  componentDidUpdate() {
    const {isLoggedIn, initApp} = this.props;
    if (isLoggedIn) {
      initApp();
    }
  }
  render() {
    const {isLoggedIn, logOut, navigation, profile, user} = this.props;
    function CustomDrawerContent(props) {
      return (
        <DrawerContentScrollView {...props} style={{paddingTop: 30}}>
          {isLoggedIn ? (
            <DrawerItem
              label="로그아웃"
              onPress={() => {
                logOut();
                props.navigation.closeDrawer();
              }}
              icon={({focused, color, size}) => (
                <Icon name="ios-log-out" size={30} color={MAIN_COLOR} />
              )}
              activeTintColor={MAIN_COLOR}
              labelStyle={styles.drawerLable}
              style={styles.drawerButton}
            />
          ) : (
            <DrawerItem
              label="로그인"
              onPress={() => {
                props.navigation.navigate('LogIn1', {
                  catchFromAsk: false,
                });
              }}
              icon={({focused, color, size}) => (
                <Icon name="ios-log-in" size={30} color={MAIN_COLOR} />
              )}
              activeTintColor={MAIN_COLOR}
              labelStyle={styles.drawerLable}
              style={styles.drawerButton}
            />
          )}
          <DrawerItem
            label="이용안내"
            onPress={() => Alert.alert('이용안내')}
            icon={({focused, color, size}) => (
              <Icon
                name="ios-information-circle-outline"
                size={30}
                color={MAIN_COLOR}
              />
            )}
            activeTintColor={MAIN_COLOR}
            labelStyle={styles.drawerLable}
            style={styles.drawerButton}
          />
          {profile && profile.email === 'didils1982@gmail.com' && (
            <DrawerItem
              label="관리자 메뉴"
              onPress={() => {
                props.navigation.navigate('Manage1', {
                  token: user.token,
                });
              }}
              icon={({focused, color, size}) => (
                <Icon
                  name="ios-information-circle-outline"
                  size={30}
                  color={MAIN_COLOR}
                />
              )}
              activeTintColor={MAIN_COLOR}
              labelStyle={styles.drawerLable}
              style={styles.drawerButton}
            />
          )}
        </DrawerContentScrollView>
      );
    }
    return (
      <View style={{width, height}}>
        <NavigationContainer independent={true}>
          <Drawer.Navigator
            initialRouteName="Stack"
            drawerContent={props => CustomDrawerContent(props)}>
            <Drawer.Screen name="Stack" component={StackScreen} />
            <Drawer.Screen name="LogIn1" component={LogInScreen1} />
            <Drawer.Screen name="LogIn2" component={LogInScreen2} />
            <Drawer.Screen name="LogIn2a" component={LogInScreen2a} />
            <Drawer.Screen name="LogIn2b" component={LogInScreen2b} />
            <Drawer.Screen name="LogIn2c" component={LogInScreen2c} />
            <Drawer.Screen name="LogIn2d" component={LogInScreen2d} />
            <Drawer.Screen name="LogIn3" component={LogInScreen3} />
            <Drawer.Screen name="Manage1" component={ManageScreen1} />
            <Drawer.Screen name="Manage2" component={ManageScreen2} />
            <Drawer.Screen name="Manage3" component={ManageScreen3} />
            <Drawer.Screen name="Manage4" component={ManageScreen4} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerButton: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  drawerLable: {
    fontSize: 22,
  },
});

export default AppContainer;
