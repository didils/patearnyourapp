// Imports

import {API_URL} from '../../constants';
import {Platform, Alert} from 'react-native';

// Actions

const LOG_IN = 'LOG_IN';

// Action Creators

function setLogIn(token) {
  return {
    type: LOG_IN,
    token,
  };
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
      .then(response => {
        if (Platform.OS === 'ios') {
          return response;
        } else {
          return response.json();
        }
      })
      .then(json => {
        if (Platform.OS === 'ios') {
          if (json.status === 200) {
            dispatch(setLogIn(JSON.parse(json._bodyText).token));
            dispatch(setUser(JSON.parse(json._bodyText).user));
            return true;
          } else {
            return false;
          }
        } else {
          if (json.token && json.user) {
            dispatch(setLogIn(json.token));
            dispatch(setUser(json.user));
            return true;
          } else {
            return false;
          }
        }
      });
  };
}

// Initial State

const initialState = {
  isLoggedIn: false,
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Reducer Functions

// Exports

const actionCreators = {
  login,
  // logOut,
  // createAccount,
  // createAccountKakao,
  // getProfile,
  // setUser,
  // setLogIn
};

export {actionCreators};

// Default Reducer Export

export default reducer;
