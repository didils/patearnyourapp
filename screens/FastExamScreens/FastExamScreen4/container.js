import React, {Component} from 'react';

// import하는 screen 명칭을 변경해야 함.
import FastExamScreen4 from './presenter';

class Container extends Component {
  state = {
    isSubmitting: false,
    isExtended: false,
    explain: '펼치기',
    iconName: 'ios-arrow-forward',
  };

  _toggle = () => {
    const {isExtended} = this.state;
    if (!isExtended) {
      this.setState({
        isExtended: true,
        explain: '접기',
        iconName: 'ios-arrow-down',
      });
    } else if (isExtended) {
      this.setState({
        isExtended: false,
        explain: '펼치기',
        iconName: 'ios-arrow-forward',
      });
    }
  };

  render() {
    // return하는 스크린 명칭을 변경해야 함.
    return (
      <FastExamScreen4
        {...this.props}
        {...this.state}
        uploadFastExam={this._uploadFastExam}
        isSubmitting={this.state.isSubmitting}
        toggle={this._toggle}
      />
    );
  }
}

export default Container;
