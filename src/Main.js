import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
function Main() {
  return (
  <div class="main">
      <h2>EDU Materials</h2>
      <p>Our Team - teamwork begins by building trust.</p>
      <Link className="main_link" to="/login">Login Now</Link>
  </div>
  );
}

export default Main;
