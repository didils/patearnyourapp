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
import AnswerComponent from '../../../components/AnswerComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {ChannelIO} from 'react-native-channel-plugin';

const {width, height} = Dimensions.get('window');

class InformScreen4 extends Component {
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
              <Text style={styles.title}>우선심사 신청</Text>
              <Text style={styles.text}>신청 시 3개월정도 단축됩니다.</Text>
            </View>
          </View>
          <View style={{marginTop: 70}}>
            <AnswerComponent
              number={1}
              title={'우선심사란?'}
              description={
                '순서를 기다리지 않고, 다른 사람 보다 먼저 심사해 주는 제도를 의미합니다. 노래방의 우선예약과 비슷하며 평균 3개월 정도 단축됩니다. 모든 경우 신청할 수 있는 것은 아니고, 일정한 요건을 만족해야 합니다.'
              }
            />
            <AnswerComponent
              number={2}
              title={'우선 심사 요건'}
              description={
                '아래 요건 중 하나만 만족하면 됩니다.\n1) 해당 상표를 현재 사용 중\n2) 곧 사용 예정\n3) 상표 분쟁이 예상되는 경우\n가 있습니다.'
              }
            />
            <AnswerComponent
              number={3}
              title={'신청 비용'}
              description={
                '우선 심사 신청서 및 특허청 수수료 모두 합쳐서 40만원입니다.'
              }
              additional={
                '우선심사신청서 작성 수임료: 24만원\n특허청 수수료: 16만원'
              }
            />
            <AnswerComponent
              number={4}
              title={'준비 자료'}
              description={
                '우선 심사 요건을 입증하기 위한 자료는,\n1) 현재 사용 중임을 입증하기 위하여, 상표가 부착된 제품, 간판, 홍보자료, 동영상 또는 홈페이지 사진\n2) 사용 예정임을 입증하기 위하여 상표/홍보물에 관한 인쇄회사 발주 서류\n3) 분쟁을 입증하기 위하여 보내거나 받은 경고장 사본\n등이 있습니다.'
              }
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button}
              onPressOut={() => navigation.navigate('FastExam1')}>
              <Text style={styles.btnText}>우선심사신청</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 60}}></View>
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
  btnContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: MAIN_COLOR,
    width: width * 0.93,
    height: width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 7,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
  },
});

export default InformScreen4;
