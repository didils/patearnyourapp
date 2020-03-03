import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
import {actionCreators as userAction} from '../../../redux/modules/user';
import {actionCreators as caseAction} from '../../../redux/modules/cases';

// const mapStateToProps = (state, ownProps) => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      return dispatch(userAction.login(username, password));
    },
  };
};

// export default container;
export default connect(null, mapDispatchToProps)(container);
