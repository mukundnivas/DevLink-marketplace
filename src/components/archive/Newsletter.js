import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// points to consider:
// - See if this whole should actually be declared as a component?
// - Instead since, this component is a one off thing. Why not just include in the page?

const Newsletter = () => {
  return (
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
  );
};

export default Newsletter;
