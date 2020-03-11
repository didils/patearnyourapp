import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
// import { actionCreators as userAction } from "경로";
import {actionCreators as caseAction} from '../../../redux/modules/cases';

// const mapStateToProps = (state, ownProps) => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(caseAction.getCases());
      dispatch(caseAction.getProcessItems());
    },
  };
};

// export default container;
export default connect(null, mapDispatchToProps)(container);
