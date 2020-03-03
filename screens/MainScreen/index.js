import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
import {actionCreators as userAction} from '../../redux/modules/user';
import {actionCreators as caseAction} from '../../redux/modules/cases';

const mapStateToProps = (state, ownProps) => {
  const {user, cases} = state;
  return {
    isCase: user.isCase,
    isLoggedIn: user.isLoggedIn,
    myCase: cases.myCase,
    myProcessItem: cases.myProcessItem,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: () => {
      dispatch(userAction.logOut());
      dispatch(caseAction.logOut());
    },
  };
};

// export default container;
export default connect(mapStateToProps, mapDispatchToProps)(container);
