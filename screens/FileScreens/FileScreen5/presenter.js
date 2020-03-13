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

const {width, height} = Dimensions.get('window');

class FileScreen5 extends Component {
  render() {
    const {
      navigation,
      route: {
        params: {identification_number},
      },
      applicant_set,
    } = this.props;

    const firstApplicant = applicant_set[0];

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
        <View style={styles.bottom}>
          <View style={styles.stepTitle}>
            <Text style={[styles.stepText, {color: 'black'}]}>이전 정보</Text>
          </View>
          <Text style={styles.explain}>
            이전에 신청했던 정보를 그대로 사용하시겠습니까?
          </Text>
        </View>
        <View
          style={{
            width,
            backgroundColor: '#FAFAFA',
            paddingHorizontal: 25,
            paddingVertical: 30,
            flexDirection: 'row',
            marginBottom: 35,
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.applicantText}>이름</Text>
            <Text style={styles.applicantText}>주소</Text>
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.applicantText}>
              {`${firstApplicant.representName} ${firstApplicant.patentApplicantNumber}`}
            </Text>
            <Text style={styles.applicantText}>{firstApplicant.address}</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() =>
              navigation.navigate('Pay1', {
                identification_number,
                pay_type: '상표출원',
              })
            }>
            <Text style={styles.btnText}>네, 기존과 동일합니다.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPressOut={() =>
              navigation.navigate('File1', {
                identification_number,
              })
            }>
            <Text style={styles.btnText}>아니오, 새로 입력할게요.</Text>
          </TouchableOpacity>
        </View>
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
    paddingLeft: 25,
    width,
    height: width * 0.36,
    alignItems: 'flex-start',
  },
  menuIcon: {
    padding: 17,
  },
  stepTitle: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  stepText: {
    fontSize: 23,
    fontWeight: '300',
    marginRight: 10,
  },
  explain: {
    fontSize: 17,
    fontWeight: '200',
    color: TEXT_COLOR,
  },
  process: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  btnContainer: {
    alignItems: 'center',
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
  applicantText: {
    fontWeight: '200',
    fontSize: 16,
    color: 'black',
    paddingVertical: 4,
  },
});

export default FileScreen5;
