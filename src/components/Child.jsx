import React from "react";
import { useSelector } from "react-redux";
function Child() {
  // useSelector((state) => console.log("This is Child-->", state));
  const userData = useSelector((state) => state.userRedu.user);
  const testData = useSelector((state) => state.testR.test);
  return (
    <div>
      <h5>Here I am using redux: {userData} </h5>
      <h6>Test Parent == {testData}</h6>
    </div>
  );
}

export default Child;
