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
import NumberComponent from '../../../components/NumberComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {ChannelIO} from 'react-native-channel-plugin';

const {width, height} = Dimensions.get('window');

class InformScreen2 extends Component {
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
              <Icon name="md-close" size={30} color="black" />
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
              <Text style={styles.title}>숫자로 보는 상표 출원</Text>
              <Text style={styles.text}>
                상표 관련 정보를 쉽게 알려드립니다.
              </Text>
            </View>
          </View>
          <NumberComponent
            number={'6'}
            fontSize={70}
            description1={'개월 소요'}
            description2={
              '특허청에 브랜드 등록 신청한 날로부터 최종 상표등록증을 받기까지 걸리는 시간은 약 6월입니다. 심사는 약 3~4월 정도 걸리지만, 심사 이후 이의신청 기간 2달을 더 기다려야 최종 등록증을 받을 수 있습니다.\n이의신청 기간이란, 심사관의 심사 결과에 이의를 제기할 수 있는 기간으로, 2개월 동안 누구나 신청할 수 있습니다.\n긴급을 요하는 경우, 1달 안에 심사를 받을 수 있습니다. 이렇게 심사 기간을 단축시킬 수 있는 제도를 우선심사라고 합니다. 이때 긴급을 요하는 경우란, 내가 실제 사용 중인 경우 또는 타인이 내 브랜드를 도용하는 등 분쟁이 예상되는 경우 등이 있습니다.\n우선 심사 신청 시 소요되는 비용은 약 50만원 정도로 적지 않은 금액이나, 브랜드의 등록 가능성을 최대한 빨리 확인할 수 있는 효과적인 절차입니다. 브랜드를 현재 사용하고 있는 중이라면, 우선심사 제도를 활용할 것을 강력하게 추천 드립니다.'
            }
          />
          <NumberComponent
            number={'10'}
            fontSize={70}
            description1={'년 유지'}
            description2={
              '등록된 상표는 10년 동안 유지됩니다. 10년 이상 사용하고 싶을 경우, 얼마든지 갱신할 수 있습니다.\n최초 등록료 납부 시 선택적으로 5년으로 선택할 수도 있으며, 짧아지는 기간 만큼 등록료를 덜 납부하게 됩니다.'
            }
          />
          <NumberComponent
            number={'50'}
            fontSize={70}
            description1={'만원'}
            description2={
              '상표를 최종 등록하는데까지 드는 비용은 총 50만원 정도입니다. 50만원 중에서 특허청에 납부하는 금액은 약 30만원이고, 나머지 금액은 상표가 등록될 수 있도록 정성을 쏟은 변리사의 수임료입니다.\n다만 법률 서비스의 특성 상, 별도의 절차가 요구되는 경우 예상 비용에서 벗어날 가능성이 존재합니다.'
            }
          />
          <NumberComponent
            number={'550'}
            fontSize={60}
            description1={'건'}
            description2={
              '하루 평균 550건 정도 출원되고 있습니다. 2019년 기준으로 대한민국 특허청에 출원된 상표는 모두 20만건으로, 그 중 7만건의 상표가 등록되었습니다.\n날이 갈수록 높아지는 브랜드의 중요도에 따라 상표 출원 건수도 높아지고 있습니다. 나의 피땀으로 일궈 낸 비즈니스에 브랜드를 입혀주세요.'
            }
          />
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

export default InformScreen2;
