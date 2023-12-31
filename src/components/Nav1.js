import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// images
import seff_logo_transparent from "../media/seff_logo_transparent.png";
import { Link } from "react-router-dom";

const Nav1 = () => {
  return (
    <Navbar expand="lg" className="z-3 nav1" data-bs-theme="dark">
      <Container className="">
        <Navbar.Brand href="#home">
          <img
            src={seff_logo_transparent}
            width="100"
            className="d-inline-block align-top me-4"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-between w-100 align-items-center ">
            <Link className="px-1 fs-7 fw-normal active" to="/">
              Home
            </Link>
            <Link className="px-1 fs-7 fw-normal  " href="#link">
              ABOUT
            </Link>
            <NavDropdown className="fs-7 fw-normal" title="TECH" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="px-1 fs-7 fw-normal  " to="Page3">
              BUSINESS
            </Link>
            <Link className="px-1 fs-7 fw-normal  " href="#link">
              SECURITY
            </Link>
            <Link className="px-1 fs-7 fw-normal  " href="#link">
              SPORTS
            </Link>
            <Link className="px-1 fs-7 fw-normal  " href="#link">
              MEDICAL
            </Link>
            <Link className="px-1 fs-7 fw-normal  " href="#link">
              STARTUPS
            </Link>
            <Link className="px-1 fs-7 fw-normal  " href="#link">
              APPS
            </Link>
            <Link className="px-1 fs-7 fw-normal  " to="/page30">
              JOBS
            </Link>
            <button type="button" class="btn btn-primary ms-5 fs-7">
              CONTACT US
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav1;
