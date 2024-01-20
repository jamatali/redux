import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import {
  loginReducer,
  signUpReducer,
  testReducer,
  userReducer,
} from "./reducers/reducer";
const initialState = {};
const middleWare = [thunk];
const reducer = combineReducers({
  userRedu: userReducer,
  testR: testReducer,
  signUpR: signUpReducer,
  loginR: loginReducer,
});

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { reducer1 } from "./reducers/reducer";
// const initialState = {};
// const middleWare = [thunk];
// const reducer = combineReducers({ red1: reducer1 });
// const store = createStore(
//   reducer,
//   initialState,
//   applyMiddleware(...middleWare)
// );

// export default store;

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// const initialState = {};
// const reducer = combineReducers({}); //reducer is global state
// const middleWare = [thunk];
// const store = createStore(
//   reducer,
//   initialState,
//   applyMiddleware(...middleWare)
// );
// export default store;
