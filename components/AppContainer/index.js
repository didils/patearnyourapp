import {connect} from 'react-redux';
import AppContainer from './presenter';
import {actionCreators as caseAction} from '../../redux/modules/cases';

const mapStateToProps = (state, ownProps) => {
  const {user} = state;
  return {
    isLoggedIn: user.isLoggedIn,
    // profile: user.profile,
    // token: user.token
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(caseAction.getCases());
      dispatch(caseAction.getProcessItems());
    },
    // resetFeed: () => {
    //   dispatch(caseAction.resetFeed());
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
