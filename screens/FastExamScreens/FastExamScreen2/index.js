import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import IconFontawesome from 'react-native-vector-icons/FontAwesome';
import PopUpComponent from '../../../components/PopUpComponent';

const {width, height} = Dimensions.get('window');

class FastExamScreen2 extends Component {
  state = {
    images: [],
    pdf: null,
    multiselectWay: '5개 이내에서 선택 가능합니다.',
    hide: true,
    title: '',
  };

  componentDidMount() {
    if (Platform.OS === 'android') {
      this.setState({
        multiselectWay:
          '이미지를 길게 누르면 복수 개 선택 가능(5개 이내)합니다.',
      });
    }
  }

  _checkFiles = () => {
    const {images, pdf} = this.state;
    const {
      route: {
        params: {identification_number},
      },
    } = this.props;
    if (images.length === 0 && pdf === null) {
      this.setState({
        hide: false,
        title: '파일 없음',
        body: '입증 자료를 이미지나 pdf로 업로드해 주세요.',
      });
    } else {
      this.props.navigation.navigate('FastExam4', {
        images,
        pdf,
        identification_number,
      });
    }
  };

  _deleteImage = () => {
    this.setState({
      images: [],
    });
  };

  _deletePdf = () => {
    this.setState({
      pdf: null,
    });
  };

  _pickPdf = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      this.setState({
        pdf: res,
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };
  render() {
    const {navigation} = this.props;
    const {isUsing} = this.props.route.params;
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
            {isUsing ? (
              <Text style={[styles.stepText, {color: 'black'}]}>
                입증자료: 사용 중 or 사용 예정
              </Text>
            ) : (
              <Text style={[styles.stepText, {color: 'black'}]}>
                입증자료: 타인과 분쟁 중
              </Text>
            )}
          </View>
          {isUsing ? (
            <Text style={styles.explain}>
              {`사용 중이거나 곧 사용 예정이라는 것을 증명할 수 있는 자료를 입력해 주세요.\n예시) 상표가 부착된 제품, 간판, 홍보자료, 또는 홈페이지 사진`}
            </Text>
          ) : (
            <Text style={styles.explain}>
              타인과 분쟁중임을 입증할 수 있는 경고장 등의 자료를 업로드 해
              주세요.
            </Text>
          )}
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            height: height - width * 0.66 - 30,
          }}>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({
                  title: '이미지 선택',
                  body: '5개 이내에서 이미지를 선택해 주세요.',
                  hide: false,
                });
              }}>
              <View style={{flexDirection: 'row'}}>
                <IconFontawesome
                  name="image"
                  size={22}
                  color="white"
                  style={{marginRight: 8}}
                />
                <Text style={styles.btnText}>이미지</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPressOut={() => this._pickPdf()}>
              <View style={{flexDirection: 'row'}}>
                <IconFontawesome
                  name="file-pdf-o"
                  size={22}
                  color="white"
                  style={{marginRight: 8}}
                />
                <Text style={styles.btnText}>pdf</Text>
              </View>
            </TouchableOpacity>
          </View>
          {this.state.images.length > 0 && (
            <View style={{marginTop: 30}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: MAIN_COLOR,
                    fontWeight: '300',
                    marginLeft: 15,
                  }}>{`첨부된 이미지: ${this.state.images.length}개`}</Text>
                <TouchableOpacity onPress={() => this._deleteImage()}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: MAIN_COLOR,
                      fontWeight: 'bold',
                      marginRight: 15,
                    }}>
                    삭제
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: 10,
                }}>
                {this.state.images.map((item, index) => (
                  <Image
                    source={{uri: item.path}}
                    style={{width: width / 5, height: width / 5}}
                    resizeMode={'contain'}
                    key={index}
                  />
                ))}
              </View>
            </View>
          )}
          {this.state.pdf !== null && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width,
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: MAIN_COLOR,
                  fontWeight: '300',
                  marginLeft: 15,
                }}>{`첨부된 파일: ${this.state.pdf.name}`}</Text>
              <TouchableOpacity onPress={() => this._deletePdf()}>
                <Text
                  style={{
                    fontSize: 18,
                    color: MAIN_COLOR,
                    fontWeight: 'bold',
                    marginRight: 15,
                  }}>
                  삭제
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{width, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('FastExam4', {
                  identification_number: this.props.route.params
                    .identification_number,
                  pdf: null,
                  images: [],
                })
              }>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: MAIN_COLOR,
                  marginBottom: 15,
                }}>
                나중에 이메일로 제출하겠습니다
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._checkFiles()}>
              <Text style={styles.btnText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
        <PopUpComponent
          title={this.state.title}
          body={this.state.body}
          hide={this.state.hide}
          onConfirm={() => {
            this.setState({hide: true});
            ImagePicker.openPicker({
              multiple: true,
            }).then(images => {
              if (images.length > 5) {
                Alert.alert('5개를 초과할 수 없습니다.');
              } else {
                this.setState({
                  images,
                });
              }
            });
          }}
          onCancel={() => this.setState({hide: true})}
        />
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
    height: width * 0.5,
    paddingTop: 20,
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

export default FastExamScreen2;
