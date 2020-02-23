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
class AskScreen4 extends Component {
  state = {
    mainFont: 60,
  };
  componentDidMount = () => {
    const {
      route: {
        params: {logoType, logo, selected},
      },
    } = this.props;
    if (logoType === 'text') {
      if (logo.length > 20) {
        if (logo.length > 30) {
          if (logo.length > 50) {
            this.setState({
              mainFont: 20,
            });
          } else {
            this.setState({
              mainFont: 30,
            });
          }
        } else {
          this.setState({
            mainFont: 40,
          });
        }
      } else {
        this.setState({
          mainFont: 50,
        });
      }
    }
  };
  render() {
    console.log(this.props);
    const {navigation} = this.props;
    const {
      route: {
        params: {logoType, logo, selected},
      },
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuIcon}
            onPressOut={() => navigation.goBack(null)}>
            <Icon name="ios-arrow-back" size={26} color="black" />
          </TouchableOpacity>
          <Image
            style={{width: width * 0.26}}
            source={require('../../../assets/images/logo.jpeg')}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.process}>
            <Icon
              name="md-home"
              size={18}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Icon
              name="ios-arrow-forward"
              size={18}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Text style={{color: '#B2B2B2', marginRight: 6, fontSize: 15}}>
              브랜드 타입
            </Text>
            <Icon
              name="ios-arrow-forward"
              size={18}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Text style={{color: '#B2B2B2', marginRight: 6, fontSize: 15}}>
              로고/텍스트 입력
            </Text>
            <Icon
              name="ios-arrow-forward"
              size={18}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Text style={{color: '#B2B2B2', marginRight: 6, fontSize: 15}}>
              업종 선택
            </Text>
            <Icon
              name="ios-arrow-forward"
              size={18}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
          </View>
          <View style={styles.stepTitle}>
            <Text style={[styles.stepText, {color: MAIN_COLOR}]}>STEP 4</Text>
            <Text style={[styles.stepText, {color: 'black'}]}>
              신청 내용 확인
            </Text>
          </View>
          <Text style={styles.explain}>아래 신청 내용을 확인해 주세요.</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={{flex: 3, alignItems: 'center'}}>
            {logoType === 'image' ? (
              <Image source={{uri: logo}} style={styles.circleImage} />
            ) : (
              <View style={styles.circleText}>
                <Text style={[styles.explain, {fontSize: this.state.mainFont}]}>
                  {logo}
                </Text>
              </View>
            )}
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.explain}>{selected}</Text>
          </View>
        </View>
        <View style={{padding: 15, alignItems: 'center', marginTop: 40}}>
          <TouchableOpacity
            style={styles.button}
            onPressOut={this.props.onPressConfirm}>
            <Text style={styles.btnText}>신청하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 5,
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
    height: width * 0.4,
  },
  menuIcon: {
    marginHorizontal: 17,
    marginVertical: 17,
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
    flexDirection: 'row',
    paddingHorizontal: 15,
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
  circleImage: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 8,
  },
  circleText: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AskScreen4;
