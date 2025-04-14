import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../context/UserAuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error("Register error :", err.message);
    }
  };

  return (
    <div>
      <div className="col-md-6 mx-auto mt-5 border border-1 rounded p-4 shadow">
        <h2 className="w-100 text-center fw-bold mb-3">Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          {/* Email */}
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address :</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit" className="fw-bold">
              Register
            </Button>
          </div>
        </Form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p className="text-center mt-3">
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
