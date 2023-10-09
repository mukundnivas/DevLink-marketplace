import React from "react";
import Card from "react-bootstrap/Card";
import { faker } from "@faker-js/faker";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const CustomerCard = ({ customers }) => {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Featured Customers</h2>
      <br />
      <div className="row g-4">
        {customers.map((customers, index) => (
          <div
            key={index}
            className="col-xs-12 col-md-6 col-lg-3 col-xl-6 col-xxl-3"
          >
            <div className="h-100 w-100">
              <Card style={{ width: "15rem", margin: "0 auto" }} sm="auto">
                <Image src={faker.image.avatar()} alt="Avatar" fluid />
                <Card.Body>
                  <Card.Title>{customers.name}</Card.Title>
                  <Card.Text>{customers.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="text-center">
        <Button variant="dark">See all customers</Button>
      </div>
    </div>
  );
};

export default CustomerCard;
