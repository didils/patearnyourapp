import React, {Component} from 'react';

// import하는 screen 명칭을 변경해야 함.
import FileScreen4 from './presenter';
import {API_URL} from '../../../constants';
import uuidv1 from 'uuid/v1';

class Container extends Component {
  _uploadApplicants = async address => {
    const {
      navigation,
      route: {
        params: {
          assignType,
          logo,
          patentApplicantNumber,
          identification_number,
        },
      },
      user,
    } = this.props;
    const data = new FormData();
    data.append('representName', user.profile.name);
    data.append('patentApplicantNumber', patentApplicantNumber);
    data.append('address', address);
    if (assignType === 'image') {
      data.append('sign_image', {
        uri: logo,
        type: 'image/jpeg',
        name: `${uuidv1()}.jpg`,
      });
    }
    const {token} = user;
    const fetchResult = await fetch(`${API_URL}/applicants/uploads/`, {
      method: 'POST',
      headers: {
        Authorization: `JWT ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
        return false;
      } else {
        return true;
      }
    });
  };
  render() {
    return (
      <FileScreen4
        {...this.props}
        uploadApplicants={this._uploadApplicants}
        setAddress={this._setAddress}
      />
    );
  }
}

export default Container;
