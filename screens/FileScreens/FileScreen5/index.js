import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
// import { actionCreators as userAction } from "경로";
// import { actionCreators as caseAction } from "경로";

const mapStateToProps = (state, ownProps) => {
  const {user} = state;
  return {
    applicant_set: user.profile.applicant_set,
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
// export default connect(mapStateToProps, mapDispatchToProps)(container);
