import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="section error-section">
      <div className="error-container">
        <h1>Ooops! it's a dead page</h1>
        <Link className="btn btn-primary" to="/">
          Back To Home
        </Link>
      </div>
    </section>
  );
}
