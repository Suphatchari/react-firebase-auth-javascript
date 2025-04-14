import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import { useUserAuth } from "../context/UserAuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useUserAuth();

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="info" />
        <span className="mt-2 text-muted">Loading, please wait...</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
