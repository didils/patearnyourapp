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
import ImagePicker from 'react-native-image-crop-picker';
import PopUpComponent from '../../../components/PopUpComponent';

const {width, height} = Dimensions.get('window');

class FileScreen3 extends Component {
  state = {
    imageSelected: false,
    photo: null,
    hide: true,
  };

  _onPressConfirm = () => {
    const {imageSelected, photo} = this.state;
    const {
      navigation,
      route: {
        params: {identification_number, patentApplicantNumber},
      },
    } = this.props;
    if (imageSelected) {
      navigation.navigate('File4', {
        assignType: 'image',
        logo: photo,
        patentApplicantNumber,
        identification_number,
      });
    } else if (!imageSelected) {
      this._handleLibrary();
    }
  };

  _handleLibrary = () => {
    const {imageSelected} = this.state;
    if (imageSelected) {
      this.setState({hide: false});
    } else {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: false,
      }).then(image => {
        this.setState({
          imageSelected: true,
          photo: image.path,
        });
      });
    }
  };

  render() {
    const {navigation} = this.props;
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
            <Text style={[styles.stepText, {color: 'black'}]}>
              인감 도장 이미지 업로드
            </Text>
          </View>
          <Text style={styles.explain}>
            흰 종이에 인감을 날인하여 스캔/촬영한 후 업로드 해 주세요.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPressOut={this._handleLibrary}>
            {this.state.imageSelected ? (
              <Image
                source={{uri: this.state.photo}}
                style={styles.circleImage}
              />
            ) : (
              <View style={styles.circle}>
                <Icon name={'ios-image'} size={55} color={'lightgrey'} />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPressOut={this._onPressConfirm}>
          <Text style={styles.btnText}>확인</Text>
        </TouchableOpacity>
        <PopUpComponent
          title={'이미지를 수정하시겠습니까?'}
          body={''}
          hide={this.state.hide}
          onConfirm={() => {
            this.setState({hide: true});
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: false,
            }).then(image => {
              this.setState({
                imageSelected: true,
                photo: image.path,
              });
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
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: 2,
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 40,
    borderStyle: 'dashed',
  },
  circleImage: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 40,
    borderRadius: 8,
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
    position: 'absolute',
    bottom: 17,
    borderRadius: 3,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
  },
});

export default FileScreen3;
