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

function uploadFastExam(images, identification_number, pdf) {
  const data = new FormData();
  data.append('shorted_exam', true);
  var ins = images.length;
  if (ins !== 0) {
    for (var x = 0; x < ins; x++) {
      data.append(`image${x}`, {
        uri: images[x].path,
        type: 'image/jpeg',
        name: `${uuidv1()}.jpg`,
      });
    }
  }
  if (pdf !== null) {
    data.append('pdf', {
      uri: pdf.uri,
      type: 'application/pdf',
      name: pdf.name,
    });
  }
  return (dispatch, getState) => {
    const {
      user: {token},
    } = getState();
    return fetch(
      `${API_URL}/cases/fastexamupload/?identification_number=${identification_number}`,
      {
        method: 'POST',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      },
    ).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        return true;
      } else {
        return false;
      }
    });
  };
}

function uploadProcessItem(identification_number) {
  const data = new FormData();
  data.append('current_status', '출원 준비');
  data.append('descriptions', '출원서를 준비 중입니다.');
  data.append('estimate_time', '1~2일 소요');
  return (dispatch, getState) => {
    const {
      user: {token},
    } = getState();
    return fetch(
      `${API_URL}/process_items/upload/?identification_number=${identification_number}`,
      {
        method: 'POST',
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      },
    ).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logOut());
      } else if (response.ok) {
        return true;
      } else {
        return false;
      }
    });
  };
}

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
      .then(json => {
        dispatch(setMyCase(json));
      })
      .catch(function() {});
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
      .catch(function() {});
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
      .catch(function() {});
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
      .catch(function() {});
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
  uploadFastExam,
  uploadProcessItem,
};

export {actionCreators};

// Default Reducer Export

export default reducer;
// 반드시 주의!! combined Reducer 에 반드시 추가해야 함!!!
