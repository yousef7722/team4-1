import React from "react";
import Nav1 from "../components/Nav1";
import { Outlet } from "react-router-dom";
import Footer1 from "../components/Footer1";
import LoginNav1 from "../components/LoginNav1";

const Layout1 = () => {
  return (
    <div className="App min-vh-100 d-flex flex-column justify-content-between ">
      <LoginNav1/>
      <Nav1 />
      <Outlet />
      <Footer1 />
    </div>
  );
};

export default Layout1;
