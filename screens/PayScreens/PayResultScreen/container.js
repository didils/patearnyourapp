import React, {Component} from 'react';

// import하는 screen 명칭을 변경해야 함.
import PayResultScreen from './presenter';

class Container extends Component {
  componentDidMount() {
    const {initApp} = this.props;
    initApp();
    console.log(this.props);
  }
  render() {
    // return하는 스크린 명칭을 변경해야 함.
    return <PayResultScreen {...this.props} />;
  }
}

export default Container;
