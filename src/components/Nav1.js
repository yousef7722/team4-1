import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// images
import seff_logo_transparent from "../media/seff_logo_transparent.png";

const Nav1 = () => {
  return (
    <Navbar expand="lg" className="bg-transparent z-3" data-bs-theme="dark">
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
            <Nav.Link className="fs-7 fw-normal  active" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fs-7 fw-normal  " href="#link">
              Link
            </Nav.Link>
            <NavDropdown title="TECH" id="basic-nav-dropdown">
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
            <Nav.Link className="fs-7 fw-normal  " href="#link">
              BUSINESS
            </Nav.Link>
            <Nav.Link className="fs-7 fw-normal  " href="#link">
              SECURITY
            </Nav.Link>
            <Nav.Link className="fs-7 fw-normal  " href="#link">
              SPORTS
            </Nav.Link>
            <Nav.Link className="fs-7 fw-normal  " href="#link">
              MEDICAL
            </Nav.Link>
            <Nav.Link className="fs-7 fw-normal  " href="#link">
              STARTUPS
            </Nav.Link>
            <Nav.Link className="fs-7 fw-normal  " href="#link">
              APPS
            </Nav.Link>
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
