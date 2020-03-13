import React, {Component} from 'react';
import AskScreen4 from './presenter';
import {Alert, View} from 'react-native';
import uuidv1 from 'uuid/v1';
import {API_URL} from '../../../constants';
import {actionCreators as userActions} from '../../../redux/modules/user';

class Container extends Component {
  state = {
    hide: true,
    isSubmitted: false,
  };
  render() {
    return (
      <AskScreen4
        {...this.props}
        onPressConfirm={this._onPressConfirm}
        uploadCase={this._uploadCase}
        showPopup={this._showPopup}
        hidePopup={this._hidePopup}
        {...this.state}
      />
    );
  }

  _hidePopup = () => {
    this.setState({
      hide: true,
    });
  };

  _showPopup = () => {
    this.setState({
      hide: false,
    });
  };

  _onPressConfirm = async () => {
    const {
      route: {
        params: {logoType, logo, selected},
      },
    } = this.props;
    if (logoType === 'text') {
      this.setState({
        isSubmitted: true,
      });
      let trademark_title = logo;
      const uploadResult = await this._uploadCase(
        null,
        selected,
        trademark_title,
      );
      if (uploadResult) {
        this.setState({
          hide: false,
          isSubmitted: false,
        });
      } else {
        this.setState({
          isSubmitted: false,
        });
        Alert.alert('오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } else {
      this.setState({
        isSubmitted: true,
      });
      let file = logo;
      const uploadResult = await this._uploadCase(file, selected, 'image');
      if (uploadResult) {
        this.setState({
          hide: false,
          isSubmitted: false,
        });
      } else {
        this.setState({
          isSubmitted: false,
        });
        Alert.alert('오류가 발생했습니다. 다시 시도해 주세요.');
      }
    }
  };
  _uploadCase = (file, products, trademark_title) => {
    const data = new FormData();
    data.append('products', products);
    data.append('trademark_title', trademark_title);
    data.append('identification_number', `${uuidv1()}`);
    data.append('progress_status', '등록 가능성 검토 중');
    if (file !== null) {
      data.append('file', {
        uri: file,
        type: 'image/jpeg',
        name: `${uuidv1()}.jpg`,
      });
    }
    const {token} = this.props;
    return fetch(`${API_URL}/cases/upload/`, {
      method: 'POST',
      headers: {
        Authorization: `JWT ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        return true;
      } else {
        return false;
      }
    });
  };
}

export default Container;
