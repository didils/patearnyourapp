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
import LogInScreen4 from '../../screens/LogInScreens/LogInScreen4';
import ManageScreen1 from '../../screens/ManageScreen/ManageScreen1';
import ManageScreen2 from '../../screens/ManageScreen/ManageScreen2';
import ManageScreen3 from '../../screens/ManageScreen/ManageScreen3';
import ManageScreen4 from '../../screens/ManageScreen/ManageScreen4';
import AskScreen1 from '../../screens/AskScreens/AskScreen1';
import AskScreen2a from '../../screens/AskScreens/AskScreen2a';
import AskScreen2 from '../../screens/AskScreens/AskScreen2';
import AskScreen3 from '../../screens/AskScreens/AskScreen3';
import AskScreen4 from '../../screens/AskScreens/AskScreen4';
import FastExamScreen1 from '../../screens/FastExamScreens/FastExamScreen1';
import FastExamScreen2 from '../../screens/FastExamScreens/FastExamScreen2';
import FastExamScreen3 from '../../screens/FastExamScreens/FastExamScreen3';
import FastExamScreen4 from '../../screens/FastExamScreens/FastExamScreen4';
import InformScreen1 from '../../screens/InformScreens/InformScreen1';
import InformScreen2 from '../../screens/InformScreens/InformScreen2';
import InformScreen3 from '../../screens/InformScreens/InformScreen3';
import InformScreen4 from '../../screens/InformScreens/InformScreen4';
import CaseInfoScreen1 from '../../screens/CaseInfoScreens/CaseInfoScreen1';
import CaseInfoScreen2 from '../../screens/CaseInfoScreens/CaseInfoScreen2';
import PayScreen1 from '../../screens/PayScreens/PayScreen1';
import PayScreen3 from '../../screens/PayScreens/PayScreen3';
import PayResultScreen from '../../screens/PayScreens/PayResultScreen';
import HelpScreen1 from '../../screens/HelpScreens/HelpScreen1';
import HelpScreen2 from '../../screens/HelpScreens/HelpScreen2';
import PayFailScreen from '../../screens/PayScreens/PayFailScreen';
import FileScreen1 from '../../screens/FileScreens/FileScreen1';
import FileScreen2 from '../../screens/FileScreens/FileScreen2';
import FileScreen3 from '../../screens/FileScreens/FileScreen3';
import FileScreen4 from '../../screens/FileScreens/FileScreen4';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MainScreen from '../../screens/MainScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
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
            onPress={() => {
              props.navigation.navigate('Help1');
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
          <DrawerItem
            label="문의하기"
            onPress={() => {
              props.navigation.navigate('Help1');
            }}
            icon={({focused, color, size}) => (
              <Icon name="ios-chatboxes" size={30} color={MAIN_COLOR} />
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
            initialRouteName="Main"
            drawerContent={props => CustomDrawerContent(props)}>
            <Drawer.Screen name="Main" component={MainScreen} />
            <Drawer.Screen name="LogIn1" component={LogInScreen1} />
            <Drawer.Screen name="LogIn2" component={LogInScreen2} />
            <Drawer.Screen name="LogIn2a" component={LogInScreen2a} />
            <Drawer.Screen name="LogIn2b" component={LogInScreen2b} />
            <Drawer.Screen name="LogIn2c" component={LogInScreen2c} />
            <Drawer.Screen name="LogIn2d" component={LogInScreen2d} />
            <Drawer.Screen name="LogIn3" component={LogInScreen3} />
            <Drawer.Screen name="LogIn4" component={LogInScreen4} />
            <Drawer.Screen name="Manage1" component={ManageScreen1} />
            <Drawer.Screen name="Manage2" component={ManageScreen2} />
            <Drawer.Screen name="Manage3" component={ManageScreen3} />
            <Drawer.Screen name="Manage4" component={ManageScreen4} />
            <Drawer.Screen name="CaseInfo1" component={CaseInfoScreen1} />
            <Drawer.Screen name="CaseInfo2" component={CaseInfoScreen2} />
            <Drawer.Screen name="Ask1" component={AskScreen1} />
            <Drawer.Screen name="Ask2" component={AskScreen2} />
            <Drawer.Screen name="Ask2a" component={AskScreen2a} />
            <Drawer.Screen name="Ask3" component={AskScreen3} />
            <Drawer.Screen name="Ask4" component={AskScreen4} />
            <Drawer.Screen name="FastExam1" component={FastExamScreen1} />
            <Drawer.Screen name="FastExam2" component={FastExamScreen2} />
            <Drawer.Screen name="FastExam3" component={FastExamScreen3} />
            <Drawer.Screen name="FastExam4" component={FastExamScreen4} />
            <Drawer.Screen name="Inform1" component={InformScreen1} />
            <Drawer.Screen name="Inform2" component={InformScreen2} />
            <Drawer.Screen name="Inform3" component={InformScreen3} />
            <Drawer.Screen name="Inform4" component={InformScreen4} />
            <Drawer.Screen name="Pay1" component={PayScreen1} />
            <Drawer.Screen name="Pay3" component={PayScreen3} />
            <Drawer.Screen name="PayResult" component={PayResultScreen} />
            <Drawer.Screen name="PayFail" component={PayFailScreen} />
            <Drawer.Screen name="Help1" component={HelpScreen1} />
            <Drawer.Screen name="Help2" component={HelpScreen2} />
            <Drawer.Screen name="File1" component={FileScreen1} />
            <Drawer.Screen name="File2" component={FileScreen2} />
            <Drawer.Screen name="File3" component={FileScreen3} />
            <Drawer.Screen name="File4" component={FileScreen4} />
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
