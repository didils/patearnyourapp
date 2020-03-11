import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, TEXT_COLOR} from '../../../constants';
import TagItem from '../../../components/TagItem';
import {question} from '../../../question';
import QuestionItem from '../../../components/QuestionItem';

const {width, height} = Dimensions.get('window');

class HelpScreen1 extends Component {
  state = {
    keyword: '비용',
    selected: '비용',
    questionFiltered: question.filter(el => {
      return el.category === '비용';
    }),
  };

  _changeKeyword = text => {
    this.setState({
      keyword: text,
    });
  };

  _selectTag = name => {
    this.setState({
      selected: name,
      keyword: name,
      questionFiltered: question.filter(el => {
        return el.category === name;
      }),
    });
  };

  _searchByKeyword = () => {};
  render() {
    const {selected, questionFiltered} = this.state;
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
        <View style={{width, paddingLeft: 25}}>
          <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 10}}>
            brander 이용 문의
          </Text>
          <Text
            style={{
              color: TEXT_COLOR,
              fontWeight: '200',
              fontSize: 16,
              marginBottom: 5,
            }}>
            문의사항을 검색하세요.
          </Text>
          <TextInput
            placeholder="검색어를 입력해 주세요."
            autoFocus={false}
            style={[
              styles.textInput,
              this.state.isFocused ? styles.focused : styles.unFocused,
            ]}
            autoCapitalize={'none'}
            autoCorrect={false}
            value={this.state.keyword}
            onChangeText={this._changeKeyword}
            returnKeyType={'send'}
            onSubmitEditing={() => {
              this._searchByKeyword();
            }}
            onEndEditing={this._onOutFocus}
            blurOnSubmit={true}
          />
        </View>
        <View style={{paddingHorizontal: 25, marginTop: 40}}>
          <Text style={{color: TEXT_COLOR, marginBottom: 20}}>
            자주 찾는 키워드
          </Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <TagItem
              name={'비용'}
              selectTag={this._selectTag}
              selected={'비용' === selected}
            />
            <TagItem
              name={'기간'}
              selectTag={this._selectTag}
              selected={'기간' === selected}
            />
            <TagItem
              name={'등록요건'}
              selectTag={this._selectTag}
              selected={'등록요건' === selected}
            />
            <TagItem
              name={'경고장'}
              selectTag={this._selectTag}
              selected={'경고장' === selected}
            />
            <TagItem
              name={'취소심판'}
              selectTag={this._selectTag}
              selected={'취소심판' === selected}
            />
          </View>
        </View>
        <View style={{width, flex: 1, alignItems: 'center', marginTop: 25}}>
          {questionFiltered &&
            questionFiltered.map((item, index) => (
              <QuestionItem
                title={item.title}
                key={index}
                navigation={this.props.navigation}
                item={item}
              />
            ))}
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
    paddingHorizontal: 25,
    height: width * 0.36,
  },
  menuIcon: {
    padding: 17,
  },
  textInput: {
    backgroundColor: 'white',
    fontSize: 16,
    width: width * 0.85,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 14,
    paddingVertical: 19,
    borderRadius: 4,
    borderColor: 'lightgrey',
    marginTop: 15,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default HelpScreen1;
