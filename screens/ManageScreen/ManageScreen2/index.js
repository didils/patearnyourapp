import {connect} from 'react-redux';
import container from './container';

// redux 연결 시
import {actionCreators as caseAction} from '../../../redux/modules/cases';

const mapStateToProps = (state, ownProps) => {
  const {cases} = state;
  return {
    allCase: cases.allCase,
    allProcessItem: cases.allProcessItem,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllCases: () => {
      dispatch(caseAction.getAllCases());
    },
    getAllProcessItems: () => {
      dispatch(caseAction.getAllProcessItems());
    },
  };
};

// export default container;
export default connect(mapStateToProps, mapDispatchToProps)(container);
