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
import {MAIN_COLOR, TEXT_COLOR} from '../../constants';

const {width, height} = Dimensions.get('window');

class TagItem extends Component {
  state = {
    isSelected: this.props.initialState,
  };
  render() {
    const {navigation, selectTag, selected, name} = this.props;
    return (
      <TouchableOpacity onPress={() => selectTag(name)}>
        <View
          style={{
            backgroundColor: selected ? MAIN_COLOR : 'rgba(173, 223, 225,1)',
            height: 38,
            borderRadius: 19,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 12,
            marginRight: 10,
            marginBottom: 10,
          }}>
          <Text style={{color: selected ? 'white' : 'black'}}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default TagItem;
