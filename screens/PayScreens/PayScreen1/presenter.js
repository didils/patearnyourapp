import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IMP from 'iamport-react-native';

import Loading from './Loading';

const {width} = Dimensions.get('window');

class PayScreen1 extends Component {
  render() {
    const {
      navigation,
      doApiAction,
      amount,
      user: {
        profile: {username, name, email, phone},
      },
      route: {
        params: {pay_type},
      },
    } = this.props;

    function callback(response) {
      if (response.imp_success === 'false') {
        navigation.navigate('PayFail', response);
        Alert.alert(response.error_msg);
      } else if (response.imp_success === 'true') {
        doApiAction();
        navigation.navigate('PayResult', response);
      }
    }
    /* [필수입력] 결제에 필요한 데이터를 입력합니다. */
    const data = {
      pg: 'html5_inicis',
      pay_method: 'card',
      name: `${username} - ${pay_type} 비용`,
      merchant_uid: `mid_${new Date().getTime()}`,
      amount,
      buyer_name: name,
      buyer_tel: phone,
      buyer_email: email,
      // buyer_addr: '서울시 강남구 신사동 661-16',
      app_scheme: 'YourApp',
      // [Deprecated v1.0.3]: m_redirect_url
    };
    return (
      <IMP.Payment
        userCode={'imp05146057'} // 가맹점 식별코드
        loading={<Loading />} // 웹뷰 로딩 컴포넌트
        data={data} // 결제 데이터
        callback={callback} // 결제 종료 후 콜백
      />
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
  header: {
    backgroundColor: 'white',
    width,
    height: width * 0.16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 18,
    marginTop: 10,
  },
  bottom: {
    paddingHorizontal: 25,
    height: width * 0.36,
  },
  menuIcon: {
    padding: 17,
  },
});

export default PayScreen1;
