import React, {Component} from 'react';

// import하는 screen 명칭을 변경해야 함.
import AskScreen4 from './presenter';

class Container extends Component {
  render() {
    // return하는 스크린 명칭을 변경해야 함.
    return <AskScreen4 {...this.props} onPressConfirm={this._onPressConfirm} />;
  }
  _onPressConfirm = () => {
    this.props.changeToCase();
    this.props.navigation.navigate('Main');
  };
}

export default Container;
