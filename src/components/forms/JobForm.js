import Button from "react-bootstrap/Button";
import { Row, Col, Form } from "react-bootstrap";
import FreelanceForm from "./FreelanceForm";
import "../../assets/styles/Form.css";
import { useState } from "react";

const JobForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="container">
        <Form>
          <h3 className="form-title">New Job</h3>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Job type:
            </Form.Label>
            <Col>
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="Freelance"
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                  defaultChecked="true"
                  onChange={() => setIsChecked(!isChecked)}
                />
                <Form.Check
                  inline
                  label="Employment"
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                  onChange={() => setIsChecked(!isChecked)}
                />
              </div>
            </Col>
          </Form.Group>
          <h3 className="form-title">Describe your job</h3>
          <Form.Group as={Row} className="mb-3" controlId="title">
            <Form.Label column sm={3}>
              Title/Position:
            </Form.Label>
            <Col sm={3}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="desc">
            <Form.Label column sm={3}>
              Job Description:
            </Form.Label>
            <Col sm={6}>
              <Form.Control as="textarea" rows={3} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="title">
            <Form.Label column sm={3}>
              Skills:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Please add skills that your job requires e.g: Java"
              />
            </Col>
          </Form.Group>

          <p>
            Developers will find your job based on your skills you added here.
          </p>

          <h3 className="form-title">Project Conditions</h3>

          <Form.Group as={Row} className="mb-3" controlId="plength">
            <Form.Label column sm={3}>
              Project Length
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Payment
            </Form.Label>
            <Form.Label column sm={1}>
              Min
            </Form.Label>
            <Col sm={1}>
              <Form.Control type="text" />
            </Col>
            <Col sm={1}></Col>
            <Form.Label column sm={1}>
              Max
            </Form.Label>
            <Col sm={1}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="hours">
            <Form.Label column sm={3}>
              Working Hours
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          {isChecked && <FreelanceForm />}
          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </div>
    </>
  );
};

export default JobForm;
