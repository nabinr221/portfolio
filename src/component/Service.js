import React from "react";
import ServiceCard from "./cards/ServiceCard";

const Service = () => {
  return (
    <>
      <div className="service-content">
        <div className="service-text">
          <p className="title-p">WHAT WE OFFER</p>
          <h2>Affordable Services</h2>
          <p>
            A Private Limited is the most popular type of partnership Malta. The
            limited liability is, in fact, the only type of company allowed by
            Companies.
          </p>
        </div>
        <div className="service-card-grp">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </>
  );
};

export default Service;
