import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "../components/UI/CardGroup";
import { faker } from "@faker-js/faker";
import champImg from "../assets/images/champimg.svg";
import "bootstrap/dist/css/bootstrap.min.css";

//Array for Devs
const devs = [
  {
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    description: faker.lorem.sentence(),
    id: 1,
  },
  {
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    description: faker.lorem.sentence(),
    id: 2,
  },
  {
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    description: faker.lorem.sentence(),
    id: 3,
  },
  {
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    description: faker.lorem.sentence(),
    id: 4,
  },
];

//Array for cusomters
const customers = [
  {
    name: faker.person.fullName(),
    description: faker.lorem.sentence(),
    id: 1,
  },
  {
    name: faker.person.fullName(),
    description: faker.lorem.sentence(),
    id: 2,
  },
  {
    name: faker.person.fullName(),
    description: faker.lorem.sentence(),
    id: 3,
  },
  {
    name: faker.person.fullName(),
    description: faker.lorem.sentence(),
    id: 4,
  },
];

const Home = () => {
  return (
    <>
      <main>
        <br />
        <Container>
          <Row spacing={5} className="align-items-center g-4">
            <Col xs={12} md={6}>
              <Image src={champImg} fluid />
            </Col>
            <Col xs={12} md={6} className="text-center">
              <h1 style={{ fontWeight: "bold" }}>
                Unlock Excellence: Hire Freelance Developers Today!
              </h1>
              <p>
                Unlock the Power of Top-tier Freelance Developers. Elevate Your
                Projects with Skilled Professionals. Get Started Today and Turn
                Your Ideas into Reality.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
      <section>
        <br />
        <CardGroup profile={devs} />
        <br />
        <CardGroup profile={customers} />
      </section>
    </>
  );
};

export default Home;
