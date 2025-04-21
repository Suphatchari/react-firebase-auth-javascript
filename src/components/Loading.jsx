import React from "react";
import { Spinner } from "react-bootstrap";

import "animate.css";

function Loading({ text, isFullPage = false }) {
  return (
    /**
     * Use animate__animated as a base class for all animations
     *
     * Animations:
     * animate__fadeIn: fade-in effect
     * animate__fadeInDown: fade-in down effect
     * animate__fadeInUp: fade-in up effect
     * animate__fadeInLeft: fade-in left effect
     * animate__fadeInRight: fade-in right effect
     * animate__zoomIn: zoom-in effect
     * animate__bounceIn: bounce-in effect
     * animate__slideInUp: slide-in up effect
     */
    <div
      className={`d-flex flex-column justify-content-center align-items-center animate__animated animate__zoomIn ${
        isFullPage ? "vh-100 " : "mt-5 "
      }`}
    >
      <Spinner animation="grow" role="status" variant="primary" />
      {text && <span className="mt-2 text-muted">{text}</span>}
    </div>
  );
}

export default Loading;
