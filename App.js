import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';

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
        console.log('사용자가 푸쉬 허용함');
      })
      .catch(error => {
        console.log('사용자가 푸쉬 거부함');
      });
  }

  async componentDidMount() {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          console.log('푸쉬 허용됨');
        } else {
          console.log('푸시 허용되지 않음');
          this.NotiPermission();
        }
      });

    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('AsyncStorage로부터 불러온 fcmToken', fcmToken);

    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        console.log('firebase로부터 얻은 fcmTocken', fcmToken);
        await AsyncStorage.setItem('fcmTocken', fcmToken);
      }
    }
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
    console.log(response);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Received push notification </Text>
        <Button title="푸쉬 보내기" onPress={() => this.sendNotification()} />
      </View>
    );
  }
}
