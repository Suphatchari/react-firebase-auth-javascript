import { Link } from "react-router-dom";

import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  return (
    <div className="text-center mt-5">
      <div>
        <h3>Welcome Page</h3>
        <img src={reactLogo} alt="React logo" className="m-3" />
      </div>
      <Link to="/login" className="btn btn-success mx-2 my-3">
        Login
      </Link>
      <Link to="/register" className="btn btn-primary mx-2 my-3">
        Register
      </Link>
    </div>
  );
}

export default App;
