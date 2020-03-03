import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Pdf from 'react-native-pdf';
import {TEXT_COLOR, MAIN_COLOR} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

class CaseInfoScreen2 extends Component {
  componentDidMount() {
    console.log('pdf screen prop', this.props);
  }
  render() {
    const {
      navigation,
      route: {
        params: {file_pdf, payButton},
      },
    } = this.props;
    const source = {
      uri: file_pdf,
      cache: true,
    };
    //const source = require('./test.pdf');  // ios only
    //const source = {uri:'bundle-assets://test.pdf'};

    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

    return (
      <View style={styles.container}>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link presse: ${uri}`);
          }}
          style={styles.pdf}
        />

        <TouchableOpacity
          onPressOut={() => navigation.goBack(null)}
          style={{position: 'absolute', top: 0, left: 8, padding: 15}}>
          <View>
            <Icon name="ios-close" size={50} color="black" />
          </View>
        </TouchableOpacity>
        {payButton === true && (
          <View
            style={{
              position: 'absolute',
              bottom: 30,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: MAIN_COLOR,
                paddingVertical: 14,
                marginTop: 8,
                width,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'white',
                }}>
                결제하러 가기
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    width: '100%',
    height: '100%',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default CaseInfoScreen2;
