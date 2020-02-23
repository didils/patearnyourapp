import React, {Component} from 'react';

// import하는 screen 명칭을 변경해야 함.
import DefaultScreen from './presenter';

class Container extends Component {
  render() {
    // return하는 스크린 명칭을 변경해야 함.
    return <DefaultScreen {...this.props} />;
  }
}

export default Container;
