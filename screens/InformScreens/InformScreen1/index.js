import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import AnswerComponent from '../../../components/AnswerComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {ChannelIO} from 'react-native-channel-plugin';

const {width, height} = Dimensions.get('window');

class InformScreen1 extends Component {
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
              <Text style={styles.title}>상표 등록이 필요한 경우</Text>
              <Text style={styles.text}>상표 등록은 필수가 아닙니다.</Text>
              <Text style={styles.text}>
                그렇다면 어떤 경우에 상표 등록이 필요할까요?
              </Text>
            </View>
          </View>
          <AnswerComponent
            number={1}
            title={'분쟁을 예방하고 싶을 때'}
            description={
              '내 브랜드를 다른 사람이 먼저 등록 했다면?\n우리나라 상표 제도는 선출원주의를 채택하고 있습니다. 선출원주의란, 먼저 특허청에 신청(출원)한 사람에게 상표의 사용 권한을 준다는 의미죠. 반대로 말하면, 내가 먼저 오래전부터 사용하고 있다해도 신청을 늦게하면 내가 만든 브랜드라도 다른 사람에게 뺏길 수 있습니다.\n최근 유투브 스타 펭수의 유행어를 제3자가 먼저 상표 출원하여 문제가 된 적 있었죠? 문제가 붉어지자 다행히 펭수에게 상표를 돌려줬지만, 하마터면 펭수는 자신의 유행어를 뺏길 뻔 했습니다.'
            }
            additional={
              '선사용권이라는 제도에 의해서 일부 보호 받을 수는 있지만, 브랜드를 뺏길 경우 큰 피해가 발생할 수 있다는 것은 꼭 알고 있어야 합니다!'
            }
            uri={require('../../../assets/images/peng.jpg')}
            imageStyle={{height: 100, paddingBottom: 5}}
            imagePadding={0}
            alignImage={'flex-end'}
          />
          <AnswerComponent
            number={2}
            title={'공격적으로 마케팅할 때'}
            description={
              '내 커피숍이 유명해지자, 한 블록 거리에 같은 이름의 커피숍이 생기면 어떨까요?\n바이럴 마케팅에 열심히 투자하여, 단골이 생기고 유명 인플루언서들도 와서 인스타그램에 좋아요도 급증했습니다. 이것을 법적으로 브랜드에 신용이 쌓인다고 표현합니다.\n하지만 이러한 기쁨도 잠시, 같은 이름의 커피숍이 근처에 생기자 내 가게로 착각하는 손님이 생겨나기 시작하면서 매출이 감소하기 시작했습니다.\n이처럼 내가 열심히 일궈 놓은 신용을 다른 사람에게 하루아침에 뺏기는 경우가 비일비재 합니다. 뒤늦게 상표 출원을 하려고 했더니 상표 마저 그사람에게 뺏긴다면 얼마나 허탈할까요.'
            }
            additional={
              '이러한 사례의 경우 부정경쟁 방지법에 의해서 일부분 보호 받을 수 있기는 하나, 이는 상표 등록으로 인한 보호에 비해 매우 제한적입니다!'
            }
            uri={require('../../../assets/images/insta.jpeg')}
            imageStyle={{height: width * 0.6, width: width * 0.86}}
            imagePadding={30}
            alignImage={'center'}
          />
          <AnswerComponent
            number={3}
            title={'지점 확장 가능성이 있을 때'}
            uri={null}
            description={
              '프랜차이즈 사업에 있어서 상표 등록은 선택이 아니라 필수입니다.\n내 가게가 전국적으로 유명해져서, 전국 방방곡곡 지점이 생기기 시작했습니다. 이렇게 기분 좋은 나날이 계속되던 중, 상표 침해 경고장 하나를 받게 됩니다. 다른 사람이 나보다 먼저 상표 등록을 받은 것입니다.\n계속 사용하게 되면 형사 고소까지 당할 수 있어서, 눈물을 머금고 내 가게뿐만 아니라 전국 모든 지점의 간판을 내렸습니다.\n상표 등록의 중요성을 모르는 경우 이와 같이 전체 프랜차이즈 사업 명칭을 변경하는 최악의 경우도 생길 수 있습니다.'
            }
            additional={
              '프랜차이즈 사업은, 선사용권에 의해서 절대 보호 받을 수 없습니다. 나중에라도 프랜차이즈를 고려하고 있다면 지금 당장 상표를 등록하세요.'
            }
            uri={require('../../../assets/images/starbuck.jpeg')}
            imageStyle={{height: width * 0.6, width: width * 0.86}}
            imagePadding={30}
            alignImage={'center'}
          />
          <AnswerComponent
            number={4}
            title={'동업할 때'}
            description={
              '동업을 하다가 헤어지면 브랜드는 누가 갖나요?\n유투브를 통한 온라인 강의로 유명해지자, 출판사에서 책을 출판하자는 제의가 들어옵니다. 인세 받을 생각만으로도 기분이 좋았는데 상표 등록 비용을 지원해줄테니, 출판사 명의로 상표까지 등록하자고 제안이 왔습니다. 브랜드를 출판사 명의로 등록 시 문제가 있을까요?\n브랜드 명의는 반드시 자신의 명의로 등록 받아야 합니다. 동업이 잘 유지되는 상황이라면 문제 없겠지만, 그 출판사와 동업 계약이 해지된 후가 문제입니다. 출판사 명의로 등록 받은 내 브랜드는, 계약 해지 후 더 이상 사용할 수 없게 됩니다.'
            }
            additional={
              '실제 사례를 바탕으로 재구성된 케이스입니다. 동업 계약 시, 브랜드 소유권을 분명하게 하세요!'
            }
            uri={require('../../../assets/images/partnership.jpeg')}
            imageStyle={{height: width * 0.6, width: width * 0.86}}
            imagePadding={30}
            alignImage={'center'}
          />
          <AnswerComponent
            number={5}
            title={'브랜드를 키우고 싶을 때'}
            description={
              '10년 후 내 브랜드의 가치는?\n내일 첫 오픈하는 내 가게의 브랜드 가치는 0원입니다. 어떤 소비자도 내 브랜드를 알지 못하기 때문입니다. 하지만 소비자들이 차츰 내 브랜드를 인식하기 시작한다면, 브랜드의 가치는 천천히 단계적으로 올라가겠죠?\n상표 등록은 먼 미래 내 브랜드의 가치가 보호될 수 있도록, 신용을 담을 수 있는 그릇으로 비유할 수 있습니다. 신용을 담을 수 있는 그릇이 없다면, 10년이 지나도 20년이 지나도 내 브랜드의 가치는 오르지 못하고 제자리에 머물러 있을 것입니다.'
            }
            additional={
              '2019년 삼성전자의 브랜드 가치는 약 72조원으로 세계 6위, STARBUCKS의 브랜드 가치는 14조원으로 세계 48위를 기록했습니다. 이처럼 브랜드의 신용은 상표권에 담을 수 있습니다.'
            }
            uri={require('../../../assets/images/credit.jpeg')}
            imageStyle={{height: width * 0.6, width: width * 0.86}}
            imagePadding={30}
            alignImage={'center'}
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

export default InformScreen1;
