// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import LogInScreen4 from '../../screens/LogInScreens/LogInScreen4';
// import {NavigationContainer} from '@react-navigation/native';
// import MainScreen from '../MainScreen';
// import ManageScreen1 from '../ManageScreen/ManageScreen1';
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';

// class DrawerScreen extends Component {
//   render() {
//     const Drawer = createDrawerNavigator();
//     const {isLoggedIn} = this.props;
//     function CustomDrawerContent(props) {
//       return (
//         <DrawerContentScrollView {...props}>
//           <DrawerItemList {...props} />
//           {isLoggedIn && (
//             <DrawerItem label="로그아웃" onPress={() => alert('로그아웃')} />
//           )}
//         </DrawerContentScrollView>
//       );
//     }
//     return (
//       <NavigationContainer independent={true}>
//         <Drawer.Navigator
//           initialRouteName="Main"
//           drawerContent={props => CustomDrawerContent(props)}
//           hideStatusBar={true}>
//           <Drawer.Screen name="Main" component={MainScreen} />
//           <Drawer.Screen name="LogIn4" component={LogInScreen4} />
//           <Drawer.Screen name="Manage1" component={ManageScreen1} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default DrawerScreen;
