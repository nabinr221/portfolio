import React from "react";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
const TestimonialCard = () => {
  return (
    <>
      <div className="testimonial-card">
        <div className="testimonial-img">
          <img
            src="https://cdn.pixabay.com/photo/2020/10/09/04/56/woman-5639513_960_720.jpg"
            alt=""
          />
        </div>
        <div className="testimonial-feedback">
          <p>
            <span>
              <RiDoubleQuotesL size={25} color="#9a9a9a" />
            </span>{" "}
            We use a customized application specifically designed a testing
            gonse to keep away fro people
            <span>
              <RiDoubleQuotesR size={25} color="#9a9a9a" />
            </span>
          </p>
          <hr />
        </div>
        <div className="testimonial-info">
          <h2 className="name">nabin r. Chaudhary</h2>
          <p className="position">full stack developer</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
