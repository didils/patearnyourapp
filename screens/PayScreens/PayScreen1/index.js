import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
import {actionCreators as caseAction} from '../../../redux/modules/cases';

const mapStateToProps = (state, ownProps) => {
  const {user} = state;
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    uploadFastExam: (images, identification_number, pdf) => {
      return dispatch(
        caseAction.uploadFastExam(images, identification_number, pdf),
      );
    },
    uploadProcessItem: identification_number => {
      dispatch(caseAction.uploadProcessItem(identification_number));
    },
  };
};

// export default container;
export default connect(mapStateToProps, mapDispatchToProps)(container);
