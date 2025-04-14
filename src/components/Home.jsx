import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useUserAuth } from "../context/UserAuthContext";

function Home() {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.error("Logout error :", err.message);
    }
  };

  return (
    <div className="text-center">
      <h2 className="w-100 fw-bold mb-3">Home</h2>
      <p>Hi, {user?.email}</p>
      <p>
        <b>UID : </b>
        {user?.uid}
      </p>
      <Button variant="danger" className="fw-bold" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Home;
