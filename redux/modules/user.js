// Imports

import {API_URL} from '../../constants';
import {Platform, Alert} from 'react-native';

// Actions

const LOG_IN = 'LOG_IN';
const CHANGE_TO_CASE = 'CHANGE_TO_CASE';
const LOG_OUT = 'LOG_OUT';
const SET_USER = 'SET_USER';

// Action Creators

function setLogIn(token) {
  return {
    type: LOG_IN,
    token,
  };
}

function setChangeToCase() {
  return {
    type: CHANGE_TO_CASE,
  };
}

function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

function logOut() {
  return {type: LOG_OUT};
}

// API Actions

function login(username, password) {
  return dispatch => {
    return fetch(`${API_URL}/rest-auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.token && json.user) {
          dispatch(setLogIn(json.token));
          dispatch(setUser(json.user));
          return true;
        } else {
          return false;
        }
      });
  };
}

function createAccount(username, password, email, name, phone) {
  return dispatch => {
    return fetch(`${API_URL}/rest-auth/registration/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password1: password,
        password2: password,
        email: email,
        name: name,
        phone: phone,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log('create account 내부의 json', json);
        if (json.token) {
          dispatch(setLogIn(json.token));
          dispatch(setUser(json.user));
          return true;
        } else {
          return false;
        }
        // if (Platform.OS === "ios") {
        //   if (json.status === 200) {
        //     dispatch(setLogIn(JSON.parse(json._bodyText).token));
        //     dispatch(setUser(JSON.parse(json._bodyText).user));
        //     return true;
        //   } else {
        //     return false;
        //   }
        // } else {
        //   if (json.token && json.user) {
        //     dispatch(setLogIn(json.token));
        //     dispatch(setUser(json.user));
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }
      })
      .catch(err => console.log(err));
  };
}

// Initial State

const initialState = {
  isLoggedIn: false,
  isCase: false,
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TO_CASE:
      return applyChangeToCase(state);
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
    case SET_USER:
      return applySetUser(state, action);
    default:
      return state;
  }
}

// Reducer Functions

applyChangeToCase = state => {
  return {
    ...state,
    isCase: true,
  };
};

function applyLogOut(state) {
  return {
    ...state,
    isLoggedIn: false,
    isCase: false,
    token: '',
    case: [],
  };
}

function applySetUser(state, action) {
  const {user} = action;
  return {
    ...state,
    profile: user,
  };
}

function applyLogIn(state, action) {
  const {token} = action;
  return {
    ...state,
    isLoggedIn: true,
    token,
  };
}

// Exports

const actionCreators = {
  login,
  setChangeToCase,
  logOut,
  createAccount,
  // createAccountKakao,
  // getProfile,
  // setUser,
  // setLogIn
};

export {actionCreators};

// Default Reducer Export

export default reducer;
