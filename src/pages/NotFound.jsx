import { Button } from "react-bootstrap";
import { BsEmojiFrown } from "react-icons/bs";
import { Link } from "react-router-dom";

import "@css/NotFound.css";

function NotFound() {
  return (
    <div className="page-not-found d-flex flex-column justify-content-center align-items-center text-center px-3">
      <div className="icon-container mb-4">
        <BsEmojiFrown className="frown-icon" />
      </div>
      <h1 className="display-4 fw-bold text-dark">404</h1>
      <h4 className="mb-2 text-muted">ไม่พบหน้านี้</h4>
      <p className="mb-4 text-secondary">
        ขออภัย หน้าที่คุณพยายามเข้าชมไม่มีอยู่ในระบบ
      </p>
      <Link to="/home">
        <Button variant="outline-primary" className="fw-semibold">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
