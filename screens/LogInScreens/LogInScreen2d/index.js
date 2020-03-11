import {connect} from 'react-redux';
import container from './container';
import {actionCreators as userAction} from '../../../redux/modules/user';
import {actionCreators as caseAction} from '../../../redux/modules/cases';

// const mapStateToProps = (state, ownProps) => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(caseAction.getCases());
    },
    createAccount: (username, password, email, name, phone, fcm_pushtoken) => {
      return dispatch(
        userAction.createAccount(username, password, email, name, phone),
      );
    },
  };
};

// export default container;
export default connect(null, mapDispatchToProps)(container);
