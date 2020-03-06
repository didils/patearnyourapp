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
    expectDate: '',
    expectExamDate: '',
    selected: false,
    iconName: 'ios-arrow-forward',
    explain: '펼치기',
  };
  componentDidMount() {
    const {
      route: {
        params: {cases, myProcessItem},
      },
    } = this.props;
    console.log('props in caseInfo1', cases);
    // var dt = new Date('2020-10-30');
    var dt = new Date(cases.request_date);
    var dtExam = new Date(cases.request_date);
    if (cases.shorted_exam) {
      dt.setMonth(dt.getMonth() + 4);
      dtExam.setMonth(dtExam.getMonth() + 1);
      const textDate = `${dt.getFullYear()}.${dt.getMonth()}.`;
      const textExamDate = `${dtExam.getFullYear()}.${dtExam.getMonth()}.`;
      this.setState({
        expectDate: textDate,
        expectExamDate: textExamDate,
      });
    } else if (!cases.shorted_exam) {
      dt.setMonth(dt.getMonth() + 6);
      dtExam.setMonth(dtExam.getMonth() + 3);
      const textDate = `${dt.getFullYear()}.${dt.getMonth()}.`;
      const textExamDate = `${dtExam.getFullYear()}.${dtExam.getMonth()}.`;
      this.setState({
        expectDate: textDate,
        expectExamDate: textExamDate,
      });
    }
  }

  _toggleSelected = () => {
    if (this.state.selected) {
      this.setState({
        selected: false,
        iconName: 'ios-arrow-forward',
        explain: '펼치기',
      });
    } else if (!this.state.selected) {
      this.setState({
        selected: true,
        iconName: 'ios-arrow-down',
        explain: '접기',
      });
    }
  };

  render() {
    const {
      navigation,
      route: {
        params: {cases, dateText2, myProcessItem},
      },
    } = this.props;

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
            {myProcessItem.filter(
              el =>
                el.case.identification_number === cases.identification_number,
            ).length > 1 && (
              <View style={styles.noticeBox}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      color: MAIN_COLOR,
                      fontWeight: 'bold',
                      fontSize: 22,
                      marginBottom: 4,
                      paddingLeft: 15,
                    }}>
                    {this.state.expectExamDate}
                  </Text>
                  <Text
                    style={{
                      color: MAIN_COLOR,
                      fontWeight: '300',
                      fontSize: 14,
                      marginBottom: 4,
                    }}>
                    에 심사 예정
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      color: MAIN_COLOR,
                      fontWeight: 'bold',
                      fontSize: 22,
                      marginBottom: 4,
                      paddingLeft: 15,
                    }}>
                    {this.state.expectDate}
                  </Text>
                  <Text
                    style={{
                      color: MAIN_COLOR,
                      fontWeight: '300',
                      fontSize: 14,
                      marginBottom: 4,
                    }}>
                    에 등록 예정
                  </Text>
                </View>
                {cases.shorted_exam === true ? (
                  <Text
                    style={{
                      flexWrap: 'wrap',
                      color: TEXT_COLOR,
                      fontSize: 15,
                      fontWeight: '300',
                      paddingLeft: 15,
                    }}>
                    우선 심사가 신청된 사건입니다.
                  </Text>
                ) : (
                  <View>
                    <Text
                      style={{
                        flexWrap: 'wrap',
                        color: TEXT_COLOR,
                        fontSize: 15,
                        fontWeight: '300',
                        paddingLeft: 15,
                        marginVertical: 6,
                      }}>
                      우선 심사를 신청하면 약 3개월 정도 단축시킬 수 있습니다.
                    </Text>
                    <View
                      style={{
                        width,
                        alignItems: 'flex-end',
                        paddingRight: 15,
                      }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Inform4')}>
                        <View style={styles.buttonPdf}>
                          <Text
                            style={{
                              fontSize: 15,
                              marginRight: 10,
                              fontWeight: '500',
                              color: TEXT_COLOR,
                            }}>
                            우선심사신청
                          </Text>
                          <Icon
                            name="ios-arrow-forward"
                            size={18}
                            color={MAIN_COLOR}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                <View
                  style={{
                    width,
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity onPress={() => this._toggleSelected()}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          color: 'lightgrey',
                          marginRight: 6,
                        }}>{`사건 정보 ${this.state.explain}`}</Text>
                      <Icon
                        name={this.state.iconName}
                        size={19}
                        color="lightgrey"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                {this.state.selected && (
                  <View style={{marginTop: 5}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 25,
                        marginVertical: 5,
                      }}>
                      <Text
                        style={{
                          fontWeight: '300',
                          color: 'grey',
                          fontSize: 15,
                          marginRight: 15,
                          width: width / 5,
                        }}>
                        신청일:
                      </Text>
                      <Text
                        style={{
                          color: MAIN_COLOR,
                          fontWeight: '500',
                          fontSize: 15,
                        }}>
                        {cases.request_date}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 25,
                        marginVertical: 5,
                      }}>
                      <Text
                        style={{
                          fontWeight: '300',
                          color: 'grey',
                          fontSize: 15,
                          marginRight: 15,
                          width: width / 5,
                        }}>
                        출원일:
                      </Text>
                      {cases.filed_date === null ? (
                        <Text
                          style={{
                            color: MAIN_COLOR,
                            fontWeight: '500',
                            fontSize: 15,
                          }}>
                          아직 출원 전입니다
                        </Text>
                      ) : (
                        <Text
                          style={{
                            color: MAIN_COLOR,
                            fontWeight: '500',
                            fontSize: 15,
                          }}>
                          {cases.filed_date}
                        </Text>
                      )}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 25,
                        marginVertical: 5,
                      }}>
                      <Text
                        style={{
                          fontWeight: '300',
                          color: 'grey',
                          fontSize: 15,
                          marginRight: 15,
                          width: width / 5,
                        }}>
                        출원번호:
                      </Text>
                      {cases.filed_date === null ? (
                        <Text
                          style={{
                            color: MAIN_COLOR,
                            fontWeight: '500',
                            fontSize: 15,
                          }}>
                          아직 출원 전입니다
                        </Text>
                      ) : (
                        <Text
                          style={{
                            color: MAIN_COLOR,
                            fontWeight: '500',
                            fontSize: 15,
                          }}>
                          {cases.application_number}
                        </Text>
                      )}
                    </View>
                  </View>
                )}
              </View>
            )}
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
                  if (a.id > b.id) {
                    return 1;
                  }
                  if (a.id < b.id) {
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
    paddingTop: 20,
    paddingBottom: 10,
  },
  menuIcon: {
    padding: 17,
  },
  buttonPdf: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderColor: TEXT_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 8,
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
