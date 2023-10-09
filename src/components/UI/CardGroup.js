import React from "react";
import Cards from "./Cards";
import DarkButton from "./DarkButton";

// points to look at:
// change the h2 - Featured Freelancer to be part of a page. When routes are set up, it is fine for now

const CardGroup = ({ profile }) => {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Featured Freelancers</h2>
      <br />
      <div className="row g-4">
        {profile.map((profile, index) => (
          <div
            key={profile.index}
            className="col-xs-12 col-md-6 col-lg-3 col-xl-6 col-xxl-3"
          >
            <Cards profile={profile} />
          </div>
        ))}
      </div>
      <br />
      <div className="text-center">
        <DarkButton text="See more" />
      </div>
    </div>
  );
};

export default CardGroup;
