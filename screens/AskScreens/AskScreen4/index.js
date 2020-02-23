import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
import {actionCreators as userAction} from '../../../redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  const {user} = state;
  return {
    isLoggedIn: user.isLoggedIn,
    isCase: user.isCase,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeToCase: () => {
      dispatch(userAction.setChangeToCase());
    },
  };
};

// export default container;
export default connect(mapStateToProps, mapDispatchToProps)(container);
