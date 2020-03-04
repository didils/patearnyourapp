import {connect} from 'react-redux';
import AppContainer from './presenter';
import {actionCreators as caseAction} from '../../redux/modules/cases';
import {actionCreators as userAction} from '../../redux/modules/user';

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
    logOut: () => {
      dispatch(userAction.logOut());
    },
    // resetFeed: () => {
    //   dispatch(caseAction.resetFeed());
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
