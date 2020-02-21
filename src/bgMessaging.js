// @flow
import firebase from 'react-native-firebase';
// Optional flow type
import type {RemoteMessage} from 'react-native-firebase';
import {ChannelIO} from 'react-native-channel-plugin';

export default async (message: RemoteMessage) => {
  // handle your message
  console.log('mListener내부의 메시지', fcmToken);
  ChannelIO.isChannelPushNotification(message.data).then(result => {
    if (result) {
      ChannelIO.handlePushNotification(message.data).then(_ => {});
    } else {
      // TODO : Your FCM code
    }
  });
  return Promise.resolve();
};
