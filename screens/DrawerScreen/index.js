import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
// import { actionCreators as userAction } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {user} = state;
  return {
    isLoggedIn: user.isLoggedIn,
    // profile: user.profile,
    // token: user.token
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1 : () => {
//             dispatch(userAction.logOut())
//         }
//     }
// }

// export default container;
export default connect(mapStateToProps)(container);
