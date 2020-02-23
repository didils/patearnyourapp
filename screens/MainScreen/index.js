import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
import {actionCreators as userAction} from '../../redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  const {user} = state;
  return {
    isCase: user.isCase,
    isLoggedIn: user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: () => {
      dispatch(userAction.logOut());
    },
  };
};

// export default container;
export default connect(mapStateToProps, mapDispatchToProps)(container);
