import React, {Component} from 'react';

// import하는 screen 명칭을 변경해야 함.
import FileScreen5 from './presenter';

class Container extends Component {
  render() {
    // return하는 스크린 명칭을 변경해야 함.
    return <FileScreen5 {...this.props} />;
  }
}

export default Container;
