import React from 'react'

const Achievement = (props) => {
  return (
    <>
      <div className="counter-card">
        <div className="icon">
          <img src={props.item.img} alt="" />
        </div>
        <div className="achievements-title">
          <h2> {props.item.number} +</h2>
          <p className="">{props.item.title}</p>
        </div>
      </div>
    </>
  );
}

export default Achievement