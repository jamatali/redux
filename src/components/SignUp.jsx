import { useDispatch } from "react-redux";
import { signUpAction } from "../actions/action";
import { useState } from "react";

useDispatch;
function SignUp() {
  const [data, userData] = useState({});
  const handleChange = (e) => {
    // console.log("Form Date Received===>", data);
    userData({ ...data, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSignUp = (e) => {
    // console.log("Submitted Date===>", data);
    e.preventDefault();
    dispatch(signUpAction(data));
  };
  return (
    <div>
      <form>
        <label htmlFor="">First Name</label>
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">First Name</label>
        <input
          placeholder="Last Name"
          name="lastName"
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Last Name</label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Last Name</label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSignUp}>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
