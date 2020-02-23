import {connect} from 'react-redux';
import container from './container';
import {actionCreators as userAction} from '../../../redux/modules/user';

// const mapStateToProps = (state, ownProps) => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (username, password, email, name, phone, fcm_pushtoken) => {
      return dispatch(
        userAction.createAccount(username, password, email, name, phone),
      );
    },
  };
};

// export default container;
export default connect(null, mapDispatchToProps)(container);
