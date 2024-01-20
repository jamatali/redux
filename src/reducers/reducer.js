export const userReducer = (state = {}, action) => {
  // console.log("Receiving Params in Reducer===>", action);
  switch (action.type) {
    case "user1":
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
export const testReducer = (state = {}, action) => {
  // console.log("Receiving Params in TestReducer===>", state);
  switch (action.type) {
    case "testp":
      return {
        test: action.payload,
      };
    default:
      return state;
  }
};
export const signUpReducer = (state = {}, action) => {
  // console.log("SignUp Params received in reducer==>", state);
  switch (action.type) {
    case "signUp":
      return {
        sign: action.payload,
      };
    default:
      return state;
  }
};
export const loginReducer = (state = {}, action) => {
  console.log("Login Received in Reducer===>", action);
  switch (action.type) {
    case "login":
      return {
        login: action.payload,
      };
    // case "error":
    //   return {
    //     login: action.payload,
    //   };
    // case "pErr":
    //   return {
    //     login: action.payload,
    //   };
    default:
      return state;
  }
};

// import {
//   USER_LOGIN_REQUEST1,
//   USER_LOGIN_REQUEST2,
//   USER_LOGIN_REQUEST3,
// } from "../constants/const";
// export const reducer1 = (state = {}, action) => {
//   console.log("Receiving ===>", action);
//   switch (action.type) {
//     case USER_LOGIN_REQUEST1:
//       return {
//         request: action.payload,
//       };
//     default:
//       return state;
//   }
// };
