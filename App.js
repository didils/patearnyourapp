import React, {Component} from 'react';
import {View, Text, SafeAreaView, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import AppContainer from './components/AppContainer';
import 'react-native-gesture-handler';
import {ChannelIO} from 'react-native-channel-plugin';
const {store} = configureStore();
import type {RemoteMessage} from 'react-native-firebase';
import {NavigationContainer} from '@react-navigation/native';

let settings = {
  pluginKey: 'd2fbd87c-f46c-458a-91bb-63064f0f03a0',
  userId: 'userId',
  profile: {
    name: 'Jason',
    mobileNumber: '01012345678',
  },
  launcherConfig: {
    xMargin: Platform.OS === 'ios' ? 30 : 10,
    yMargin: 75,
    position: 'right',
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // async componentDidMount() {
  //   PushNotification.configure({
  //     // (optional) Called when Token is generated (iOS and Android)
  //     onRegister: function(token) {
  //       console.log('TOKEN:', token);
  //     },

  //     // (required) Called when a remote or local notification is opened or received
  //     onNotification: function(notification) {
  //       console.log('NOTIFICATION:', notification);

  //       // process the notification

  //       // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
  //       notification.finish(PushNotificationIOS.FetchResult.NoData);
  //     },

  //     // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  //     senderID: '364047764287',

  //     // IOS ONLY (optional): default: all - Permissions to register.
  //     permissions: {
  //       alert: true,
  //       badge: true,
  //       sound: true,
  //     },
  //   });
  // }

  async NotiPermission() {
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        console.log(
          '사용자가 푸쉬 허용함, 즉 기존에는 허용되어 있지 않으나 방금 허용 한거임',
        );
      })
      .catch(error => {
        console.log('사용자가 푸쉬 거부함');
      });
  }

  async componentDidMount() {
    ChannelIO.boot(settings).then(result => {});
    ChannelIO.show(true);
    if (Platform.OS === 'ios') {
      // Firebase Notification 설정
      firebase
        .messaging()
        .hasPermission()
        .then(enabled => {
          console.log('enabled in firebase hasPermission', enabled);
          if (enabled) {
            console.log(
              'hasPermission, enabled 즉 기존에 푸시가 이미 허용되어 있음',
              enabled,
            );
          } else {
            this.NotiPermission();
          }
        });
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      console.log('AsyncStorage 취득한 fcmToken', fcmToken);
      if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        console.log('firebase로부터 취득한 fcmToken', fcmToken);
        if (fcmToken) {
          ChannelIO.initPushToken(fcmToken);
          await AsyncStorage.setItem('fcmTocken', fcmToken);
        }
      } else if (fcmToken) {
        console.log('AsyncStorage 취득한 fcmToken', fcmToken);
      }

      // Channel IO 설정
      PushNotificationIOS.addEventListener('register', token => {
        console.log('addEventListener(register', token);
        ChannelIO.initPushToken(token);
      });
      PushNotificationIOS.addEventListener('notification', notification => {
        ChannelIO.isChannelPushNotification(notification.getData()).then(
          result => {
            if (result) {
              ChannelIO.handlePushNotification(notification.getData()).then(
                () => {
                  notification.finish(PushNotificationIOS.FetchResult.NoData);
                },
              );
            } else {
              //other push logics goes here
              console.log('//other push logics goes here', result);
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            }
          },
        );
      });
      const permissionResult = await PushNotificationIOS.requestPermissions();
    } else if (Platform.OS === 'android') {
      firebase
        .messaging()
        .hasPermission()
        .then(enabled => {
          if (enabled) {
          } else {
            this.NotiPermission();
          }
        });
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      this.onRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
        ChannelIO.initPushToken(fcmToken);
      });
      if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        console.log('firebase로부터 취득한 fcmToken', fcmToken);
        if (fcmToken) {
          ChannelIO.initPushToken(fcmToken);
          await AsyncStorage.setItem('fcmTocken', fcmToken);
        }
      }
      this.mListener = firebase
        .messaging()
        .onMessage((message: RemoteMessage) => {
          console.log('mListener내부의 메시지', fcmToken);
          ChannelIO.isChannelPushNotification(message.data).then(result => {
            if (result) {
              ChannelIO.handlePushNotification(message.data).then(_ => {});
            } else {
              // TODO : Your FCM code
            }
          });
        });
    }

    this.removeNotificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed((notification: Notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      });
    this.removeNotificationListener = firebase
      .notifications()
      .onNotification((notification: Notification) => {
        // Process your notification as required
        console.log(
          'notification in firebase removeNotificationListener',
          notification,
        );
      });
    this.removeNotificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened((notificationOpen: NotificationOpen) => {
        // Get the action triggered by the notification being opened
        const action = notificationOpen.action;
        // Get information about the notification that was opened
        const notification: Notification = notificationOpen.notification;

        console.log(
          'action and notification notificationOpen when app is forground/background',
          action,
          notification,
        );
      });

    const notificationOpen: NotificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      // App was opened by a notification
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      const notification: Notification = notificationOpen.notification;

      console.log(
        'action and notification notificationOpen when app is closed',
        action,
        notification,
      );
    }
  }

  componentWillUnmount() {
    this.onRefreshListener();
    this.mListener();
    this.removeNotificationDisplayedListener();
    this.removeNotificationListener();
    this.removeNotificationOpenedListener();
  }

  async sendNotification() {
    const FIREBASE_API_KEY =
      'AAAAVMLwCz8:APA91bExwuSnhMzBFRiqkDwYPjXFp5uDlF9Xg5fmIpzpVnBjPbCvl_CE8uzGZw1u0_DdY5bob3CKf-mEJ_Lap5mYszae7B2m9iOIIfLjalFTIP4YuV424EWF56rEjp4E74mfewtbOIMr';
    const message = {
      registration_ids: [
        'c97DpVvleUC2unBOJD92DL:APA91bE8P-IjMX_nfb2DHfyy7T1_dDL_M9qBPj7SGQVH0fyxr0qWB1t5hL6n8z40vlnTOsSBVuBo1SJCMO93ZY36dTQtBxEa8iMvaPZCKmMKvBhCZhLnOrtVqDSOZ-gykVQNhdYoHcwI',
      ],
      notification: {
        title: '테스트 제목',
        body: '테스트 본문',
        vibrate: 1,
        sound: 1,
        show_in_foregroud: true,
        priority: 'high',
        content_available: true,
      },
    };

    let headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'key=' + FIREBASE_API_KEY,
    });

    let response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers,
      body: JSON.stringify(message),
    });
    response = await response.json();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Provider store={store}>
            {/* <PersistGate persistor={persistor}> */}
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <AppContainer />
            </View>
            {/* </PersistGate> */}
          </Provider>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
