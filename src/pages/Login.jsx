import { Link } from "react-router-dom";
import LoginForm from "@components/LoginForm";

function Login() {
  return (
    /**
     * To center this layout vertically and horizontally on the screen,
     * use the following container setup:
     * <div className="container min-vh-100 d-flex align-items-center justify-content-center">
     */
    <div className="container my-5">
      <div className="col-md-6 mx-auto border border-1 rounded p-4 shadow">
        <h2 className="w-100 text-center fw-bold mb-3">Login</h2>
        <LoginForm />
        <p className="text-center mt-3 small">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <p className="text-center mt-3 small">
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
