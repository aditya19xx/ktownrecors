import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          {" "}
          <NavLink to="/home"> <img style={{ width: "150px" }} src={logo} />{" "} </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/newreleases">New Releases</NavLink>
            <NavLink to="/artists">Our Artists</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
