import React from "react";
import ServiceCard from "./cards/ServiceCard";
import ServiceData from "../config/ServiceData.json";
import SectionHeading from "./SectionHeading";
const Service = () => {
  return (
    <>
      <div className="service-content">
        <SectionHeading
          subtitle={"what we offer"}
          title={"affordable Service"}
        />
        <div className="service-card-grp">
          {ServiceData?.map((item, id) => {
            return <ServiceCard item={item} key={id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
