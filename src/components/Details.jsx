import { useSelector } from "react-redux";
import Login from "./Login";

function Details() {
  const userData = useSelector((state) => state.signUpR.sign);
  const loginData = useSelector((state) => state.loginR.login);
  return (
    <div>
      {userData?.map((m, index) => {
        return (
          <ul key={index}>
            <li>First Name :{m.firstName || "No"}</li>
            <li>Last Name :{m.lastName || "No"}</li>
            <li>Email :{m.email || "No"}</li>
            <li>Password :{m.password || "No"}</li>
          </ul>
        );
      })}
      <Login />
      <h3>User Login Status</h3>
      <h4>Status: {loginData}</h4>
    </div>
  );
}

export default Details;
