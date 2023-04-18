import React from "react";
import ServiceCard from "./cards/ServiceCard";

const Service = () => {
  return (
    <>
      <div className="service-content">
        <div className="title text-center">
          <p className="title-p b">WHAT WE OFFER</p>
          <h2 className="h2">Affordable Services</h2>
          <p className="p">
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
