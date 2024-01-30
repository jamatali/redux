export const userAction = (params) => async (dispatch) => {
  // console.log("Step-1 Receiving User params in Action ===>", params);
  dispatch({
    type: "user1",
    payload: params,
  });
};
export const testAction = (params) => async (dispatch) => {
  // console.log("Test Parent Params Received ===>", params);
  dispatch({
    type: "testp",
    payload: params,
  });
};
export const signUpAction = (params) => async (dispatch) => {
  console.log("Sign-Up Params Received", params);
  const userArray = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  userArray.push(params);
  localStorage.setItem("users", JSON.stringify(userArray));
  dispatch({
    type: "signUp",
    payload: userArray,
  });
};
export const loginAction = (params) => async (dispatch) => {
  console.log("Login Params Received....===>", params);
  // for local storage
  const userArray = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  console.log("This Is All Users:", userArray);
  const userExist = userArray.find((usr) => {
    return usr.email === params.email;
  });
  const userExistArr = localStorage.getItem("userLogin")
    ? JSON.parse(localStorage.getItem("userLogin"))
    : [];

  if (userExist) {
    if (userExist.password === params.password) {
      dispatch({
        type: "login",
        payload: "You are Loged In",
      });
      userExistArr.push(userExist);
      localStorage.setItem("userLogin", JSON.stringify(userExistArr));
      console.log("This is Existed User: ", userExistArr);
    } else {
      dispatch({
        type: "login",
        payload: "Password Not Matched",
      });
    }
    // dispatch({
    //   type: "login",
    //   payload: "You are Loged In",
    // });
  } else {
    dispatch({
      type: "login",
      payload: "User Does Not Exist",
    });
  }
};
// const loginArray = localStorage.getItem("loginUser")
//   ? JSON.parse(localStorage.getItem(loginUser))
//   : [];
// loginArray.push(params);
// localStorage.setItem("loginUser", JSON.stringify(loginArray));
// userArray[userArray.length - 1].email ===
//   loginArray[loginArray.length - 1].email &&
// userArray[userArray.length - 1].password ===
//   loginArray[loginArray.length - 1].password
//   ? dispatch({
//       type: "login",
//       payload: loginArray,
//     })
//   : dispatch({
//       type: "error",
//       payload: "Error",
//     });
//   dispatch({
//     type: "login",
//     payload: params,
//   });
// };
// import {
//   USER_LOGIN_REQUEST1,
//   USER_LOGIN_REQUEST2,
//   USER_LOGIN_REQUEST3,
// } from "../constants/const";
// export const userAction1 = (params) => async (dispatch) => {
//   console.log("Action Params1 =====> ", params);
//   dispatch({
//     type: USER_LOGIN_REQUEST1,
//     payload: params,
//   });
// };
// export const userAction2 = (params) => async (dispatch) => {
//   console.log("Action Params2 =====> ", params);
//   dispatch({
//     type: USER_LOGIN_REQUEST2,
//     payload: params,
//   });
// };
// export const userAction3 = (params) => async (dispatch) => {
//   console.log("Action Params3 =====> ", params);
//   dispatch({
//     type: USER_LOGIN_REQUEST3,
//     payload: params,
//   });
// };
