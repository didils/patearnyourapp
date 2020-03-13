import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {TEXT_COLOR, MAIN_COLOR} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {ChannelIO} from 'react-native-channel-plugin';

const {width} = Dimensions.get('window');

class MainCase extends Component {
  state = {
    dateText: '',
    dateText2: '',
    lastStatus: '등록 가능성 검토중',
  };
  componentDidMount = () => {
    const {
      cases,
      cases: {process_item_set},
    } = this.props;

    if (process_item_set && process_item_set.length !== 0) {
      const lastStatus = process_item_set[0].current_status;
      this.setState({
        lastStatus,
      });
    }

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const askYear = Number(cases.request_date.substr(0, 4));
    const askMonth = Number(cases.request_date.substr(5, 2));
    const askDate = Number(cases.request_date.substr(8, 2));
    const currentFullDate = new Date(year, month - 1, date);
    const askFullDate = new Date(askYear, askMonth - 1, askDate);

    var date_diff_indays = function(date1, date2) {
      return Math.floor(
        (Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
          Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) /
          (1000 * 60 * 60 * 24),
      );
    };
    const subDate = date_diff_indays(askFullDate, currentFullDate);
    if (subDate === 0) {
      const dateText = '오늘 신청';
      const dateText2 = '0일';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate === 1) {
      const dateText = '어제 신청';
      const dateText2 = '1일';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 2 && subDate < 7) {
      const dateText = `${subDate}일 전에 신청`;
      const dateText2 = `${subDate}일`;
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 7 && subDate < 14) {
      const dateText = '1주일 전에 신청';
      const dateText2 = '1주일';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 14 && subDate < 21) {
      const dateText = '2주일 전에 신청';
      const dateText2 = '2주일';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 21 && subDate < 28) {
      const dateText = '3주일 전에 신청';
      const dateText2 = '3주일';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 28 && subDate < 50) {
      const dateText = '한 달 전에 신청';
      const dateText2 = '한 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 50 && subDate < 80) {
      const dateText = '두 달 전에 신청';
      const dateText2 = '두 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 80 && subDate < 110) {
      const dateText = '세 달 전에 신청';
      const dateText2 = '세 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 110 && subDate < 140) {
      const dateText = '네 달 전에 신청';
      const dateText2 = '네 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 140 && subDate < 170) {
      const dateText = '다섯 달 전에 신청';
      const dateText2 = '다섯 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 170 && subDate < 200) {
      const dateText = '여섯 달 전에 신청';
      const dateText2 = '여섯 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 200 && subDate < 230) {
      const dateText = '일곱 달 전에 신청';
      const dateText2 = '일곱 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 230 && subDate < 260) {
      const dateText = '여덜 달 전에 신청';
      const dateText2 = '여덜 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 260 && subDate < 290) {
      const dateText = '아홉 달 전에 신청';
      const dateText2 = '아홉 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 290 && subDate < 320) {
      const dateText = '열 달 전에 신청';
      const dateText2 = '열 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 320 && subDate < 340) {
      const dateText = '열한 달 전에 신청';
      const dateText2 = '열한 달';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 340 && subDate < 640) {
      const dateText = '1년 전에 신청';
      const dateText2 = '1년';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 640 && subDate < 1000) {
      const dateText = '2년 전에 신청';
      const dateText2 = '2년';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 1000 && subDate < 1365) {
      const dateText = '3년 전에 신청';
      const dateText2 = '3년';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 1365 && subDate < 1800) {
      const dateText = '4년 전에 신청';
      const dateText2 = '4년';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 1800 && subDate < 2100) {
      const dateText = '5년 전에 신청';
      const dateText2 = '5년';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 2100 && subDate < 2500) {
      const dateText = '6년 전에 신청';
      const dateText2 = '6년';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 2500 && subDate < 2850) {
      const dateText = '7년 전에 신청';
      const dateText2 = '7년';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 2850 && subDate < 3200) {
      const dateText = '8년 전에 신청';
      const dateText2 = '8년';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 3200 && subDate < 3600) {
      const dateText = '9년 전에 신청';
      const dateText2 = '9년';
      this.setState({
        dateText,
        dateText2,
      });
    } else if (subDate >= 3600) {
      const dateText = '10년 이상';
      const dateText2 = '10년 이상';
      this.setState({
        dateText,
        dateText2,
      });
    }
  };

  render() {
    const {cases, navigation, user} = this.props;
    return (
      <View style={styles.container}>
        {cases.trademark_title === 'image' ? (
          <View style={styles.item}>
            <View style={{flexDirection: 'row'}}>
              {cases.file && (
                <Image
                  source={{
                    uri: cases.file,
                  }}
                  style={{
                    width: width * 0.25,
                    height: width * 0.25,
                    borderRadius: 5,
                  }}
                />
              )}
              <View
                style={{
                  justifyContent: 'center',
                  paddingLeft: width * 0.05,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 18,
                    marginBottom: 10,
                    color: 'black',
                  }}>
                  {this.state.dateText}
                </Text>
                <Text style={{fontWeight: '100', fontSize: 13}}>
                  신청 업종:
                </Text>
                <Text style={{fontWeight: '600', fontSize: 15}}>
                  {cases.products}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: width * 0.05,
              }}>
              <View>
                <Text style={{fontWeight: '100', fontSize: 13}}>
                  현재 진행 상태:
                </Text>
                <Text style={{color: MAIN_COLOR, fontSize: 15}}>
                  {this.state.lastStatus}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  ChannelIO.hide(true);
                  navigation.navigate('CaseInfo1', {
                    cases: this.props.cases,
                    dateText: this.state.dateText,
                    dateText2: this.state.dateText2,
                    user,
                  });
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: MAIN_COLOR,
                      fontSize: 15,
                      marginRight: 5,
                    }}>
                    더보기
                  </Text>
                  <Icon name="ios-arrow-forward" size={15} color={MAIN_COLOR} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.item}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.image}>
                <Text style={{fontSize: 20}}>{cases.trademark_title}</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  paddingLeft: width * 0.05,
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 18,
                    marginBottom: 10,
                    color: 'black',
                  }}>
                  {this.state.dateText}
                </Text>
                <Text style={{fontWeight: '100', fontSize: 13}}>
                  신청 업종:
                </Text>
                <Text style={{fontWeight: '600', fontSize: 15}}>
                  {cases.products}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: width * 0.05,
              }}>
              <View>
                <Text style={{fontWeight: '100', fontSize: 13}}>
                  현재 진행 상태:
                </Text>
                <Text style={{color: MAIN_COLOR, fontSize: 15}}>
                  {cases.progress_status}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  ChannelIO.hide(true);
                  navigation.navigate('CaseInfo1', {
                    cases: this.props.cases,
                    dateText: this.state.dateText,
                    dateText2: this.state.dateText2,
                    user,
                  });
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: MAIN_COLOR,
                      fontSize: 15,
                      marginRight: 5,
                    }}>
                    더보기
                  </Text>
                  <Icon name="ios-arrow-forward" size={15} color={MAIN_COLOR} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  item: {
    backgroundColor: '#FAFAFA',
    padding: width * 0.05,
    borderRadius: width * 0.01,
    marginLeft: width * 0.05,
    width: width * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: TEXT_COLOR,
  },
});

export default MainCase;
