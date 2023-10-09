import { Row, Col, Form } from "react-bootstrap";
import "../../assets/styles/Form.css";

const FreelanceForm = () => {
  return (
    <>
      <h3 className="form-title">Experience</h3>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Experience In
        </Form.Label>
        <Col sm={2}>
          <Form.Control type="text" />
        </Col>
        <Col sm={1}></Col>
        <Form.Label column sm={2}>
          For at least
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>
    </>
  );
};

export default FreelanceForm;
