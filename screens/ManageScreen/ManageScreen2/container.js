import React, {Component} from 'react';

import ManageScreen2 from './presenter';

class Container extends Component {
  componentDidMount() {
    const {getAllCases, getAllProcessItems} = this.props;
    getAllCases();
    getAllProcessItems();
  }
  render() {
    return <ManageScreen2 {...this.props} />;
  }
}

export default Container;
