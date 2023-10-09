import React from "react";
import Card from "react-bootstrap/Card";
import { faker } from "@faker-js/faker";
import Image from "react-bootstrap/Image";

const Cards = ({ profile }) => {
  return (
    <div className="container">
      <div className="h-100 w-100">
        <Card
          style={{ width: "15rem", margin: "0 auto", cursor: "pointer" }}
          sm="auto"
        >
          <Image src={faker.image.avatar()} alt="Avatar" fluid />
          <Card.Body>
            <Card.Title>{profile.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {profile.jobTitle}
            </Card.Subtitle>
            <Card.Text>{profile.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
