import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import user from './modules/user';
// import cases from "./modules/cases";
// import caseFiles from "./modules/caseFiles";
// import product from "./modules/product";

const middlewares = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistCombineReducers(persistConfig, {
  user,
  //   cases,
  //   product,
  //   caseFiles
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return {store, persistor};
};

export default configureStore;
