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
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import StepComponent from '../../../components/StepComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {ChannelIO} from 'react-native-channel-plugin';

const {width} = Dimensions.get('window');

class InformScreen3 extends Component {
  componentDidMount() {
    ChannelIO.hide(true);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPressOut={() => {
              ChannelIO.show(true);
              navigation.goBack(null);
            }}>
            <View style={styles.menuIcon}>
              <Icon name="ios-close" size={30} color="black" />
            </View>
          </TouchableOpacity>
          <Image
            style={{width: width * 0.26}}
            source={require('../../../assets/images/logo.jpeg')}
            resizeMode={'contain'}
          />
        </View>
        <ScrollView>
          <View style={styles.bottom}>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: StyleSheet.hairlineWidth,
                paddingBottom: 20,
              }}>
              <Text style={styles.title}>신청부터 등록까지</Text>
              <Text style={styles.text}>모든 절차를 안내해 드립니다.</Text>
            </View>
          </View>
          <View style={{marginTop: 70}}>
            <StepComponent
              title={'브랜드 신청하기'}
              description1={
                '브랜드로 사용할 텍스트나 로고를 입력하고, 업종을 선택해 주세요.'
              }
              description2={
                '1~2일 이내에 등록 가능성을 판단하고, 진행 가능 여부를 안내 드립니다.'
              }
              step={'Step 1.'}
            />
            <StepComponent
              title={'결제'}
              description1={
                '진행 가능 여부에 따라 결제 진행 의사를 알려주세요.'
              }
              description2={
                '진행 의사 결정 전까지는 어떠한 비용도 청구되지 않습니다.'
              }
              step={'Step 2.'}
            />
            <StepComponent
              title={'심사 대기'}
              description1={'약 3~4개월 내에 심사 결과가 나옵니다.'}
              description2={
                '심사 기간을 단축하고 싶은 경우, 우선심사 제도를 이용할 수 있습니다.'
              }
              step={'Step 3.'}
            />
            <StepComponent
              title={'심사 결과'}
              description1={
                '심사가 원활하게 진행 되었다면, 약 2개월의 이의신청 기간이 진행됩니다.'
              }
              description2={''}
              step={'Step 4.'}
            />
            <StepComponent
              title={'등록료 납부'}
              description1={
                '이의신청 경과 후 등록료를 납부하면, 상표 등록증을 수령할 수 있습니다.'
              }
              description2={''}
              step={'Step 5.'}
            />
          </View>
          <View style={{height: 100}}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
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
    paddingTop: 30,
    width,
  },
  menuIcon: {
    padding: 17,
  },
  title: {
    fontWeight: '400',
    fontSize: 33,
    color: TEXT_COLOR,
    marginBottom: 12,
  },
  text: {
    fontWeight: '300',
    fontSize: 17,
    color: '#9faec4',
    marginBottom: 6,
  },
});

export default InformScreen3;
