import { Link } from "react-router-dom";
import RegisterForm from "@components/RegisterForm";

function Register() {
  return (
    /**
     * To center this layout vertically and horizontally on the screen,
     * use the following container setup:
     * <div className="container min-vh-100 d-flex align-items-center justify-content-center">
     */
    <div className="container my-5">
      <div className="col-md-6 mx-auto border border-1 rounded p-4 shadow">
        <h2 className="w-100 text-center fw-bold mb-3">Register</h2>
        <RegisterForm />
        <p className="text-center mt-3 small">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p className="text-center mt-3 small">
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
