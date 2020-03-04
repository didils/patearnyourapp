import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../screens/MainScreen';
import AskScreen1 from '../../screens/AskScreens/AskScreen1';
import AskScreen2 from '../../screens/AskScreens/AskScreen2';
import AskScreen2a from '../../screens/AskScreens/AskScreen2a';
import AskScreen3 from '../../screens/AskScreens/AskScreen3';
import AskScreen4 from '../../screens/AskScreens/AskScreen4';
import LogInScreen1 from '../../screens/LogInScreens/LogInScreen1';
import LogInScreen2 from '../../screens/LogInScreens/LogInScreen2';
import LogInScreen2a from '../../screens/LogInScreens/LogInScreen2a';
import LogInScreen2b from '../../screens/LogInScreens/LogInScreen2b';
import LogInScreen2c from '../../screens/LogInScreens/LogInScreen2c';
import LogInScreen2d from '../../screens/LogInScreens/LogInScreen2d';
import LogInScreen3 from '../../screens/LogInScreens/LogInScreen3';
import CaseInfoScreen1 from '../../screens/CaseInfoScreens/CaseInfoScreen1';
import CaseInfoScreen2 from '../../screens/CaseInfoScreens/CaseInfoScreen2';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
class StackScreen extends Component {
  render() {
    return (
      <View style={{width, height}}>
        <NavigationContainer independent={true}>
          <Stack.Navigator style={{flex: 1}} headerMode={'none'}>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Ask1" component={AskScreen1} />
            <Stack.Screen name="Ask2" component={AskScreen2} />
            <Stack.Screen name="Ask2a" component={AskScreen2a} />
            <Stack.Screen name="Ask3" component={AskScreen3} />
            <Stack.Screen name="Ask4" component={AskScreen4} />
            <Stack.Screen name="LogIn1" component={LogInScreen1} />
            <Stack.Screen name="LogIn2" component={LogInScreen2} />
            <Stack.Screen name="LogIn2a" component={LogInScreen2a} />
            <Stack.Screen name="LogIn2b" component={LogInScreen2b} />
            <Stack.Screen name="LogIn2c" component={LogInScreen2c} />
            <Stack.Screen name="LogIn2d" component={LogInScreen2d} />
            <Stack.Screen name="LogIn3" component={LogInScreen3} />
            <Stack.Screen name="CaseInfo1" component={CaseInfoScreen1} />
            <Stack.Screen name="CaseInfo2" component={CaseInfoScreen2} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default StackScreen;
