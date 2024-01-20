import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/action";

function Login() {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("Login Data====>", loginData);
    dispatch(loginAction(loginData));
  };
  return (
    <div>
      <form>
        <label htmlFor="">Email</label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
