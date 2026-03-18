import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "5rem" }}>
    <h3>404: Page Not Found</h3>
    <p>The page you are looking for does not exist.</p>
    <Link to="/">Go Back to Home</Link>
  </div>
);

export default NotFound;