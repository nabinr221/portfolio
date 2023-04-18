import React from "react";
import { BsArrowRepeat } from "react-icons/bs";

const ServiceCard = (props) => {
  return (
    <>
      <div className="service-card">
        <div>
          <span>
            <BsArrowRepeat size={25} />
          </span>
        </div>
        <div className="card-title">
          <h3>{props.item.title}</h3>
        </div>
        <div className="card-content">
          <p>{props.item.description}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
