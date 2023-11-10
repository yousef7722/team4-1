import React from "react";
import { Link } from "react-router-dom";

const LoginNav1 = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-black z-3" id="nav-one">
      <div class="container-fluid container">
        <div
          class="collapse navbar-collapse flex-lg-row-reverse"
          id="navbarNav"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item ">
              <Link class="nav-link fs-6" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LoginNav1;
