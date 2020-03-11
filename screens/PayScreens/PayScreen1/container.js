import React, {Component} from 'react';

// import하는 screen 명칭을 변경해야 함.
import PayScreen1 from './presenter';
import {
  PRICE_FOR_FILLING,
  PRICE_FOR_FASTEXAM,
  PRICE_FOR_REGISTRATION,
} from '../../../constants';

class Container extends Component {
  state = {
    amount: 0,
  };
  componentDidMount() {
    const {
      route: {
        params: {pay_type},
      },
    } = this.props;
    if (pay_type === '우선심사') {
      this.setState({
        amount: PRICE_FOR_FASTEXAM,
      });
    }
    if (pay_type === '상표출원') {
      this.setState({
        amount: PRICE_FOR_FILLING,
      });
    }
  }

  _doApiAction = () => {
    const {
      uploadFastExam,
      uploadProcessItem,
      route: {
        params: {pay_type, identification_number, images, pdf},
      },
    } = this.props;
    console.log('Pay 1 do API action props', this.props);
    if (pay_type === '우선심사') {
      uploadFastExam(images, identification_number, pdf);
      console.log(
        'Pay 1 do API action if문 내부',
        images,
        identification_number,
        pdf,
      );
    }
    if (pay_type === '상표출원') {
      uploadProcessItem(identification_number);
      console.log('Pay 1 do API action props', identification_number);
    }
  };

  render() {
    // return하는 스크린 명칭을 변경해야 함.
    return (
      <PayScreen1
        {...this.props}
        doApiAction={this._doApiAction}
        amount={this.state.amount}
      />
    );
  }
}

export default Container;
