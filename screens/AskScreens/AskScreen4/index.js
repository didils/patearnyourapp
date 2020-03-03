import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
import {actionCreators as userAction} from '../../../redux/modules/user';
import {actionCreators as caseAction} from '../../../redux/modules/cases';

const mapStateToProps = (state, ownProps) => {
  const {user} = state;
  return {
    isLoggedIn: user.isLoggedIn,
    isCase: user.isCase,
    token: user.token,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeToCase: () => {
      dispatch(userAction.setChangeToCase());
    },
    getCases: () => {
      dispatch(caseAction.getCases());
    },
  };
};

// export default container;
export default connect(mapStateToProps, mapDispatchToProps)(container);
