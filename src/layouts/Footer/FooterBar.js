import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../../assets/styles/FooterBar.css";

const FooterBar = () => {
  return (
    <div className="footer">
      <br />
      <section>
        <Container>
          <Row className="align-items-center g-2">
            <Col xs={12} md={3}>
              <p>Sign up for our daily insider:</p>
            </Col>
            <Col xs={12} md={6}>
              <Form inline>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="mr-2"
                  size="sm"
                />
              </Form>
            </Col>
            <Col>
              <Button
                variant="primary"
                style={{ display: "inline-block", verticalAlign: "middle" }}
                size="sm"
              >
                Subscribe
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <br />

      <footer className="bg-dark text-white">
        <br />
        <Container>
          <Row>
            <Col>
              <h5>For Dev</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/HowItWorks">How it Works</a>
                </li>
                <li>
                  <a href="/HowtoCreateaProfile">How to create a profile</a>
                </li>
                <li>
                  <a href="/link3">Find jobs</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>For Clients</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/link4">How it works</a>
                </li>
                <li>
                  <a href="/link5">How to post a job</a>
                </li>
                <li>
                  <a href="/link6">Find dev</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>Stay connected</h5>
              <div className="social-icons-container">
                <a href="#f">
                  <FaFacebook />
                </a>
                <a href="#i">
                  <FaInstagram />
                </a>
                <a href="#t">
                  <FaTwitter />
                </a>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <h5 className="Title">Dev Link</h5>
          </Row>
          <Row>
            <div className="DevLinkItems">
              <Col>
                <a href="/centered-link1">Privacy Policy</a>
              </Col>
              <Col>
                <a href="/centered-link2">Terms</a>
              </Col>
              <Col>
                <a href="/centered-link3">Code of Conduct</a>
              </Col>
            </div>
          </Row>
        </Container>
        <br />
      </footer>
    </div>
  );
};

export default FooterBar;
