import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
import {actionCreators as caseAction} from '../../../redux/modules/cases';

// const mapStateToProps = (state, ownProps) => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    uploadFastExam: (images, identification_number, pdf) => {
      return dispatch(
        caseAction.uploadFastExam(images, identification_number, pdf),
      );
    },
  };
};

// export default container;
export default connect(null, mapDispatchToProps)(container);
