import { useDispatch } from "react-redux";
import { testAction } from "../actions/action";
import SignUp from "./SignUp";
function TestParent() {
  const dispatch = useDispatch();
  const handleTestP = () => {
    dispatch(testAction("This is TestParent"));
  };
  return (
    <div>
      <button onClick={handleTestP}>Test Parent</button>
      <SignUp />
    </div>
  );
}

export default TestParent;
