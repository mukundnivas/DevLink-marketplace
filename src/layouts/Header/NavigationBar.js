import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <nav>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>DevLink MarketPlace</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/dev">
                  <Nav.Link>Find Dev</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/jobs">
                  <Nav.Link>Find Jobs</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav className="">
                <LinkContainer to="/login">
                  <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link>
                    <Button variant="primary" size="sm" className="w-100">
                      Register
                    </Button>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
      </nav>
    </>
  );
};

export default NavigationBar;
