// Import
import {API_URL} from '../../constants';
import {actionCreators as userActions} from './user';
import uuidv1 from 'uuid/v1';

// Actions

const SET_MY_CASE = 'SET_MY_CASE';
const SET_ALL_CASE = 'SET_ALL_CASE';
const SET_MY_PROCESS_ITEM = 'SET_MY_PROCESS_ITEM';
const SET_ALL_PROCESS_ITEM = 'SET_ALL_PROCESS_ITEM';
const LOG_OUT = 'LOG_OUT';

// Action Creators

function setMyCase(myCase) {
  return {
    type: SET_MY_CASE,
    myCase,
  };
}

function setAllCase(allCase) {
  return {
    type: SET_ALL_CASE,
    allCase,
  };
}

function setMyProcessItem(myProcessItem) {
  return {
    type: SET_MY_PROCESS_ITEM,
    myProcessItem,
  };
}

function setAllProcessItem(allProcessItem) {
  return {
    type: SET_ALL_PROCESS_ITEM,
    allProcessItem,
  };
}

function logOut() {
  return {type: LOG_OUT};
}

// API Actions

function getCases() {
  return (dispatch, getState) => {
    const {
      user: {token},
    } = getState();
    fetch(`${API_URL}/cases/all/`, {
      method: 'GET',
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setMyCase(json)))
      .catch(function() {
        console.log('Promise Rejected');
      });
  };
}

function getAllCases() {
  return (dispatch, getState) => {
    const {
      user: {token},
    } = getState();
    fetch(`${API_URL}/cases/allcase/`, {
      method: 'GET',
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => {
        dispatch(setAllCase(json));
      })
      .catch(function() {
        console.log('Promise Rejected');
      });
  };
}

function getProcessItems() {
  return (dispatch, getState) => {
    const {
      user: {token},
    } = getState();
    fetch(`${API_URL}/process_items/all/`, {
      method: 'GET',
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setMyProcessItem(json)))
      .catch(function() {
        console.log('Promise Rejected');
      });
  };
}

function getAllProcessItems() {
  return (dispatch, getState) => {
    const {
      user: {token},
    } = getState();
    fetch(`${API_URL}/process_items/allitem/`, {
      method: 'GET',
      headers: {
        Authorization: `JWT ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => {
        dispatch(setAllProcessItem(json));
      })
      .catch(function() {
        console.log('Promise Rejected');
      });
  };
}

// Initial State

const initialState = {
  myCase: [],
};

//reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MY_CASE:
      return applySetMyCase(state, action);
    case SET_ALL_CASE:
      return applySetAllCase(state, action);
    case SET_MY_PROCESS_ITEM:
      return applySetMyProcessItem(state, action);
    case SET_ALL_PROCESS_ITEM:
      return applySetAllProcessItem(state, action);
    case LOG_OUT:
      return applyLogOut(state);
    default:
      return state;
  }
}

// Reducer Actoions

function applySetMyCase(state, action) {
  const {myCase} = action;
  return {
    ...state,
    myCase,
  };
}

function applySetAllCase(state, action) {
  const {allCase} = action;
  return {
    ...state,
    allCase,
  };
}

function applySetMyProcessItem(state, action) {
  const {myProcessItem} = action;
  return {
    ...state,
    myProcessItem,
  };
}

function applySetAllProcessItem(state, action) {
  const {allProcessItem} = action;
  return {
    ...state,
    allProcessItem,
  };
}

function applyLogOut(state) {
  return {
    ...state,
    myCase: [],
    allCase: [],
  };
}

// Export

const actionCreators = {
  logOut,
  getCases,
  getProcessItems,
  getAllCases,
  getAllProcessItems,
};

export {actionCreators};

// Default Reducer Export

export default reducer;
// 반드시 주의!! combined Reducer 에 반드시 추가해야 함!!!
