import React from 'react'
import {BsArrowRepeat} from "react-icons/bs"
const ServiceCard = () => {
  return (
    <>
      <div className="service-card">
        <div><span><BsArrowRepeat size={30}/></span></div>
        <div className="card-title">
          <h3>reaserch and analysis </h3>
        </div>
        <div className="card-content">
          <p>
            We use a customized application specifically designed a testing
            gnose to keep away for people.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard