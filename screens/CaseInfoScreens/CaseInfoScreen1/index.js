import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import ProcessItem from '../../../components/ProcessItem';

const {width} = Dimensions.get('window');

class CaseInfoScreen1 extends Component {
  state = {
    emptyArray: [],
  };
  render() {
    console.log('props in caseinfoscreen1', this.props);
    const {
      navigation,
      route: {
        params: {cases, dateText2, myProcessItem},
      },
    } = this.props;
    // const success = navigation.getParam("success");
    // const imp_uid = navigation.getParam("imp_uid");
    // const merchant_uid = navigation.getParam("merchant_uid");

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuIcon}
            onPressOut={() => navigation.goBack(null)}>
            <Icon name="md-close" size={30} color="black" />
          </TouchableOpacity>
          <Image
            style={{width: width * 0.26}}
            source={require('../../../assets/images/logo.jpeg')}
            resizeMode={'contain'}
          />
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <View style={{marginBottom: 15}}>
              <Text
                style={{color: TEXT_COLOR, fontWeight: '200', fontSize: 17}}>
                신청한 지
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text
                  style={{
                    color: MAIN_COLOR,
                    fontWeight: 'bold',
                    fontSize: 55,
                  }}>
                  {dateText2}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '200',
                    fontSize: 20,
                    paddingLeft: 10,
                    paddingBottom: 7,
                  }}>
                  지났습니다.
                </Text>
              </View>
            </View>
            <View style={{marginBottom: 20}}>
              {cases.trademark_title === 'image' ? (
                <View>
                  {cases.file && (
                    <Image
                      source={{
                        uri: cases.file,
                      }}
                      style={{
                        width: width * 0.15,
                        height: width * 0.15,
                        borderRadius: 3,
                      }}
                    />
                  )}
                </View>
              ) : (
                <View style={styles.image}>
                  <Text style={{fontSize: 13}}>{cases.trademark_title}</Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <View style={styles.noticeBox}>
              <Text
                style={{
                  color: MAIN_COLOR,
                  fontWeight: '300',
                  fontSize: 16,
                  marginBottom: 4,
                }}>
                신청 다음 절차는...
              </Text>
              <Text
                style={{
                  flexWrap: 'wrap',
                  color: TEXT_COLOR,
                  fontSize: 15,
                  fontWeight: '300',
                }}>
                신청하신 브랜드가 특허청에 상표 등록 될 수 있는지 전문 변리사가
                꼼꼼하게 검토하여 1~2일 내로 회신 드립니다.
              </Text>
            </View>
            <ProcessItem
              items={{
                current_status: '신청 완료',
                process_date: cases.request_date,
              }}
              index={-2}
              array={[]}
            />
            <ProcessItem
              items={{
                current_status: '등록 가능성 검토 중',
                descriptions:
                  '신청하신 브랜드가 등록 가능한지 꼼꼼히 검토하여 회신 드립니다.',
                expected_date: null,
                examiner_name: null,
                estimate_time: '1~2일 소요',
                process_date: null,
              }}
              index={-1}
              array={myProcessItem.filter(
                el =>
                  el.case.identification_number === cases.identification_number,
              )}
            />
            {myProcessItem &&
              myProcessItem
                .reverse()
                .sort(function(a, b) {
                  if (a.process_date > b.process_date) {
                    return 1;
                  }
                  if (a.process_date < b.process_date) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
                })
                .filter(
                  el =>
                    el.case.identification_number ===
                    cases.identification_number,
                )
                .map((items, index, array) => (
                  <ProcessItem
                    items={items}
                    key={index}
                    index={index}
                    array={array}
                    navigation={this.props.navigation}
                  />
                ))}
          </View>
          <View style={{height: width * 0.1}} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  noticeBox: {
    borderRadius: 1,
    width,
    marginBottom: 20,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  menuIcon: {
    padding: 17,
  },
  image: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: TEXT_COLOR,
  },
});

export default CaseInfoScreen1;
