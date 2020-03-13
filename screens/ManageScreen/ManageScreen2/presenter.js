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
import {MAIN_COLOR, TEXT_COLOR, API_URL} from '../../../constants';
import MainCase from '../../../components/MainCase';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

class ManageScreen2 extends Component {
  sortList = sortBy => {
    const {allCase} = this.props;

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const currentFullDate = new Date(year, month - 1, date);
    var date_diff_indays = function(date1, date2) {
      return Math.floor(
        (Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
          Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) /
          (1000 * 60 * 60 * 24),
      );
    };

    const sorted = allCase.filter(el => {
      date_diff_indays(new Date(el.request_date), currentFullDate) === 0;
    });
  };
  componentDidMount() {
    this.sortList(1);
  }
  render() {
    const {navigation, allCase, allProcessItem} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPressOut={() => navigation.goBack(null)}>
            <View style={styles.menuIcon}>
              <Icon name="ios-arrow-back" size={26} color="black" />
            </View>
          </TouchableOpacity>
          <Image
            style={{width: width * 0.26}}
            source={require('../../../assets/images/logo.jpeg')}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => console.log('오늘')}>
            <Text style={styles.btnText}>오늘</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => console.log('오늘')}>
            <Text style={styles.btnText}>1일전</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => console.log('오늘')}>
            <Text style={styles.btnText}>2일전</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() => console.log('오늘')}>
            <Text style={styles.btnText}>1주일</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.btnContainer}>
            {allCase &&
              allCase.map((cases, index) => (
                <MainCase
                  cases={cases}
                  key={index}
                  navigation={this.props.navigation}
                  myProcessItem={allProcessItem}
                />
              ))}
          </View>
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
    height: width * 0.36,
  },
  menuIcon: {
    padding: 17,
  },
  btnContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: MAIN_COLOR,
    width: width / 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 7,
    paddingVertical: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
  },
});

export default ManageScreen2;
