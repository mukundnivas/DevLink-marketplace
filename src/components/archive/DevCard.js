import React from "react";
import Card from "react-bootstrap/Card";
import { faker } from "@faker-js/faker";
import Image from "react-bootstrap/Image";
import DarkButton from "../UI/DarkButton";

const DevCard = ({ devs }) => {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Featured Freelancers</h2>
      <br />
      <div className="row g-4">
        {devs.map((dev, index) => (
          <div
            key={index}
            className="col-xs-12 col-md-6 col-lg-3 col-xl-6 col-xxl-3"
          >
            <div className="h-100 w-100">
              <Card style={{ width: "15rem", margin: "0 auto" }} sm="auto">
                <Image src={faker.image.avatar()} alt="Avatar" fluid />
                <Card.Body>
                  <Card.Title>{dev.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {dev.jobTitle}
                  </Card.Subtitle>
                  <Card.Text>{dev.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="text-center">
        <DarkButton text="See more adsad " />
      </div>
    </div>
  );
};

export default DevCard;
