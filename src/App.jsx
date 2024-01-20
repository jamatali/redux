import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { userAction1, userAction2, userAction3 } from "./actions/action";
// import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./actions/action";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import TestParent from "./components/TestParent";
import Details from "./components/Details";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const userHandle = () => {
    setCount(count + 1);
    dispatch(userAction(`User N0: ${count}`));
  };
  return (
    <>
      <h1>Redux Self Practice</h1>
      <button onClick={userHandle}>userAction</button>
      <Home />
      <TestParent />
      <Details />
    </>
  );
}

// function App() {
//   const dispatch = useDispatch();
//   useSelector((state) => console.log(state));
//   const [count, setCount] = useState(0);
//   const handleClick1 = () => {
//     setCount(count + 1);
//     dispatch(userAction1(count));
//   };
//   const handleClick2 = () => {
//     dispatch(userAction2("loginAction2"));
//   };
//   const handleClick3 = () => {
//     dispatch(userAction3("loginAction3"));
//   };

//   return (
//     <>
//       <h1>Redux</h1>
//       <h3>Count : {count}</h3>
//       <button onClick={handleClick1}>clickAction</button>
//       <button onClick={handleClick2}>clickAction</button>
//       <button onClick={handleClick3}>clickAction</button>
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   );
// }

export default App;
