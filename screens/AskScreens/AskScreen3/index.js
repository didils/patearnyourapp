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
import ItemIcon from '../../../components/ItemIcon';

const {width, height} = Dimensions.get('window');

class AskScreen3 extends Component {
  state = {
    isExpended1: false,
    isExpended2: false,
    isExpended3: false,
  };
  render() {
    const {
      navigation,
      route: {
        params: {logoType, logo},
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
              size={16}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Icon
              name="ios-arrow-forward"
              size={16}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Text style={{color: '#B2B2B2', marginRight: 6, fontSize: 13}}>
              브랜드 타입
            </Text>
            <Icon
              name="ios-arrow-forward"
              size={16}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
            <Text style={{color: '#B2B2B2', marginRight: 6, fontSize: 13}}>
              로고/텍스트 입력
            </Text>
            <Icon
              name="ios-arrow-forward"
              size={16}
              color="#B2B2B2"
              style={{marginRight: 6}}
            />
          </View>
          <View style={styles.stepTitle}>
            <Text style={[styles.stepText, {color: MAIN_COLOR}]}>STEP 3</Text>
            <Text style={[styles.stepText, {color: 'black'}]}>업종 선택</Text>
          </View>
          <Text style={styles.explain}>
            브랜드를 사용할 업종을 선택해 주세요.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPressOut={() => this._iconNavigate('Youtuber/Creator')}>
            <View style={styles.circle}>
              <Icon
                name={'logo-youtube'}
                size={24}
                color={'red'}
                style={{marginRight: 10}}
              />
              <Text style={styles.text}>Youtuber/Creator</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.mainCategory}>
            <TouchableOpacity onPressOut={this._changeExtend1}>
              <View style={styles.mainItem}>
                <Text style={styles.mainText}>요식업</Text>
                <Icon name={'ios-arrow-down'} size={20} />
              </View>
              {this.state.isExpended1 ? (
                <View style={styles.iconContainer}>
                  <ItemIcon
                    itemName={'카페'}
                    iconNavigate={this._iconNavigate}
                  />
                  <ItemIcon
                    itemName={'음식점'}
                    iconNavigate={this._iconNavigate}
                  />
                  <ItemIcon
                    itemName={'주점'}
                    iconNavigate={this._iconNavigate}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          </View>

          <View style={styles.mainCategory}>
            <TouchableOpacity onPressOut={this._changeExtend2}>
              <View style={styles.mainItem}>
                <Text style={styles.mainText}>뷰티/미용</Text>
                <Icon name={'ios-arrow-down'} size={20} />
              </View>
              {this.state.isExpended2 ? (
                <View style={styles.iconContainer}>
                  <ItemIcon
                    itemName={'미용실'}
                    iconNavigate={this._iconNavigate}
                  />
                  <ItemIcon
                    itemName={'네일샵'}
                    iconNavigate={this._iconNavigate}
                  />
                  <ItemIcon
                    itemName={'blank'}
                    iconNavigate={this._iconNavigate}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
          <View style={styles.mainCategory}>
            <TouchableOpacity onPressOut={this._changeExtend3}>
              <View style={styles.mainItem}>
                <Text style={styles.mainText}>운동/피트니스</Text>
                <Icon name={'ios-arrow-down'} size={20} />
              </View>
              {this.state.isExpended3 ? (
                <View style={styles.iconContainer}>
                  <ItemIcon
                    itemName={'헬스장'}
                    iconNavigate={this._iconNavigate}
                  />
                  <ItemIcon
                    itemName={'요가/필라테스'}
                    iconNavigate={this._iconNavigate}
                  />
                  <ItemIcon
                    itemName={'크로스핏'}
                    iconNavigate={this._iconNavigate}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
          <View style={styles.outTextContainer}>
            <TouchableOpacity>
              <Text style={styles.outText}>위 목록에 없습니다.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  _changeExtend1 = () => {
    this.setState(prevState => {
      if (prevState.isExpended1) {
        return {
          isExpended1: false,
        };
      } else if (!prevState.isExpended1) {
        return {
          isExpended1: true,
          isExpended2: false,
          isExpended3: false,
        };
      }
    });
  };
  _changeExtend2 = () => {
    this.setState(prevState => {
      if (prevState.isExpended2) {
        return {
          isExpended2: false,
        };
      } else if (!prevState.isExpended2) {
        return {
          isExpended1: false,
          isExpended2: true,
          isExpended3: false,
        };
      }
    });
  };
  _changeExtend3 = () => {
    this.setState(prevState => {
      if (prevState.isExpended3) {
        return {
          isExpended3: false,
        };
      } else if (!prevState.isExpended3) {
        return {
          isExpended1: false,
          isExpended2: false,
          isExpended3: true,
        };
      }
    });
  };
  _iconNavigate = selected => {
    const {
      route: {
        params: {logoType, logo},
      },
    } = this.props;
    this.props.navigation.navigate('Ask4', {
      selected,
      logo,
      logoType,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    color: TEXT_COLOR,
    fontSize: 14,
    fontWeight: '600',
  },
  mainItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    padding: 15,
  },
  outText: {
    fontSize: 15,
    fontWeight: '600',
    color: MAIN_COLOR,
  },
  outTextContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
  mainCategory: {
    backgroundColor: 'white',
    width: width * 0.95,
    borderRadius: 3,
    marginBottom: 15,
  },
  circle: {
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: StyleSheet.hairlineWidth,
    width: width * 0.8,
    height: width / 8,
    borderRadius: 2,
    flexDirection: 'row',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  mainText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '200',
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
});

export default AskScreen3;
