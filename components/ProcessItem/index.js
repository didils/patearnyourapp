import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {TEXT_COLOR, MAIN_COLOR} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

class ProcessItem extends Component {
  state = {
    x: 0,
    y: 0,
    componentHeight: 0,
    pointColor: 'lightgrey',
    passed: false,
  };
  componentDidMount() {
    const {index} = this.props;
    if (index === -2) {
      this.setState({
        pointColor: 'lightgrey',
      });
    } else if (index !== -2) {
      if (index + 1 === this.props.array.length) {
        this.setState({
          pointColor: MAIN_COLOR,
        });
      }
      if (this.props.array.length && index + 2 === this.props.array.length) {
        this.setState({
          passed: true,
        });
      }
    }
  }
  render() {
    const {items, navigation} = this.props;
    return (
      <View>
        <View
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            this.setState({
              y: layout.y,
              x: layout.x,
              componentHeight: layout.height,
            });
          }}
          style={{flexDirection: 'row', marginBottom: 30}}>
          <View
            style={{
              borderColor: 'grey',
              position: 'absolute',
              top: 0,
              width: 0,
              left: (width * 3.5) / 36,
              height: this.state.componentHeight + (width * 1.5) / 36 + 30,
              borderWidth: StyleSheet.hairlineWidth,
              borderStyle: 'dotted',
              borderRadius: 1,
            }}
          />
          <View
            style={{
              width: (width * 7) / 36,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: (width * 3) / 36,
                height: (width * 3) / 36,
                borderRadius: (width * 1.5) / 36,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.state.pointColor,
              }}>
              <View style={styles.circleInside}></View>
            </View>
          </View>
          <View style={{width: (width * 29) / 36}}>
            <View
              style={{
                height: width / 12,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {items.current_status}
              </Text>
            </View>
            {items.process_date !== null && items.process_date !== '' && (
              <View style={{height: width / 12}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: this.state.pointColor,
                  }}>
                  {items.process_date}
                </Text>
              </View>
            )}
            {items.current_status !== '신청 완료' && (
              <View
                style={{
                  width: (width * 27.5) / 36,
                  padding: width / 18,
                  borderRadius: 3,
                  borderColor: 'lightgrey',
                  borderWidth: StyleSheet.hairlineWidth,
                  marginTop: 8,
                }}>
                {items.estimate_time !== null && items.estimate_time !== '' && (
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: this.state.pointColor,
                      marginBottom: width / 36,
                    }}>
                    {items.estimate_time}
                  </Text>
                )}
                {items.expected_date !== null && items.expected_date !== '' && (
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '300',
                      color: MAIN_COLOR,
                      marginBottom: width / 36,
                    }}>
                    {`예상일은 ${items.expected_date}입니다.`}
                  </Text>
                )}
                {items.descriptions !== '' && items.descriptions !== null && (
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '100',
                      color: 'black',
                      lineHeight: 20,
                    }}>
                    {items.descriptions}
                  </Text>
                )}
                {items.examiner_name !== '' && items.examiner_name !== null && (
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '100',
                        color: 'black',
                        lineHeight: 20,
                      }}>
                      {`${items.examiner_name} 심사관님이 심사 준비 중이며, 총 ${items.waiting_total} 중에서 ${items.waiting_order} 번째 대기중입니다.`}
                    </Text>
                    <View
                      style={
                        ([StyleSheet.absoluteFill],
                        {
                          borderColor: MAIN_COLOR,
                          borderWidth: StyleSheet.hairlineWidth,
                          marginTop: 8,
                          borderRadius: 2,
                          height: 15,
                        })
                      }>
                      <View
                        style={{
                          backgroundColor: MAIN_COLOR,
                          borderRadius: 2,
                          height: 15,
                          width: `${(items.waiting_order /
                            items.waiting_total) *
                            100}%`,
                          paddingLeft: 7,
                        }}>
                        {(items.waiting_order / items.waiting_total) * 100 >
                          25 && (
                          <Text
                            style={{
                              fontSize: 12,
                              color: 'white',
                            }}>{`${items.waiting_order} / ${items.waiting_total}`}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                )}
                {items.current_status === '상표 출원 완료' && (
                  <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('CaseInfo2', {
                          file_pdf: items.file_pdf,
                        });
                      }}>
                      <View style={styles.buttonPdf}>
                        <Icon name="file-pdf-o" size={18} color="red" />
                        <Text
                          style={{
                            fontSize: 15,
                            marginLeft: 10,
                            fontWeight: '500',
                            color: TEXT_COLOR,
                          }}>
                          상표등록출원서
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                {items.current_status === '심사 결과' && (
                  <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('CaseInfo2', {
                          file_pdf: items.file_pdf,
                        });
                      }}>
                      <View style={styles.buttonPdf}>
                        <Icon name="file-pdf-o" size={18} color="red" />
                        <Text
                          style={{
                            fontSize: 15,
                            marginLeft: 10,
                            fontWeight: '500',
                            color: TEXT_COLOR,
                          }}>
                          {items.file_name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                {items.current_status === '등록 결정' &&
                  items.file_pdf !== null && (
                    <View style={{alignItems: 'flex-end'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('CaseInfo2', {
                            file_pdf: items.file_pdf,
                          });
                        }}>
                        <View style={styles.buttonPdf}>
                          <Icon name="file-pdf-o" size={18} color="red" />
                          <Text
                            style={{
                              fontSize: 15,
                              marginLeft: 10,
                              fontWeight: '500',
                              color: TEXT_COLOR,
                            }}>
                            등록결정서
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                {/* {items.examiner_phone !== '' && items.examiner_phone !== null && (
                <View style={{alignItems: 'flex-end'}}>
                  <TouchableOpacity>
                    <View style={styles.button}>
                      <Icon name="phone" size={18} color="white" />
                      <Text
                        style={{
                          fontSize: 15,
                          marginLeft: 10,
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        {items.examiner_phone}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )} */}
                {items.detail_button === true && (
                  <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity>
                      <View style={{paddingHorizontal: 10, marginTop: 10}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '500',
                            color: MAIN_COLOR,
                          }}>
                          자세히 보기
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                {items.is_pay_required === true &&
                  items.current_status === '검토 완료' && (
                    <View
                      style={{
                        alignItems: 'flex-end',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('CaseInfo2', {
                            file_pdf: items.file_pdf,
                            payButton: true,
                          });
                        }}>
                        <View
                          style={[styles.button, {justifyContent: 'center'}]}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            네, 진행을 원합니다.
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}

                {items.is_pay_required === true &&
                  items.current_status === '등록 결정' && (
                    <View
                      style={{
                        alignItems: 'flex-end',
                      }}>
                      <TouchableOpacity>
                        <View
                          style={[styles.button, {justifyContent: 'center'}]}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            등록하러 가기
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
              </View>
            )}
          </View>
        </View>
        {items.current_status === '심사 결과' &&
          items.file_name === '출원공고결정서' &&
          this.state.passed === false && (
            <View style={styles.noticeBox}>
              <Text
                style={{
                  color: MAIN_COLOR,
                  fontWeight: '300',
                  fontSize: 16,
                  marginBottom: 4,
                }}>
                이의신청 기간이란?
              </Text>
              <Text
                style={{
                  flexWrap: 'wrap',
                  color: TEXT_COLOR,
                  fontSize: 15,
                  fontWeight: '300',
                }}>
                {`제3자가 심사 결과에 대한 이의를 제기할 수 있는 기간으로, 2~3개월 동안 아무런 이의가 없으면, 최종 등록 결정됩니다.`}
              </Text>
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 8,
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
  noticeBox: {
    borderRadius: 1,
    width,
    marginBottom: 20,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  circle: {
    width: (width * 3) / 36,
    height: (width * 3) / 36,
    borderRadius: (width * 1.5) / 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  circleInside: {
    width: (width * 3) / 85,
    height: (width * 3) / 85,
    borderRadius: (width * 1.5) / 85,
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default ProcessItem;
