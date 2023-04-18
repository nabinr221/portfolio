import React from "react";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

const TestimonialCard = (props) => {
  return (
    <>
      <div className="testimonial-card">
        <div className="testimonial-img">
          <img src={props.item.img} alt="" />
        </div>
        <div className="testimonial-feedback">
          <p>
            <span>
              <RiDoubleQuotesL size={25} color="#9a9a9a" />
            </span>
            {props.item.description}
            <span>
              <RiDoubleQuotesR size={25} color="#9a9a9a" />
            </span>
          </p>
          <hr />
        </div>
        <div className="testimonial-info">
          <h2 className="name">{props.item.name}</h2>
          <p className="position">{props.item.position}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
