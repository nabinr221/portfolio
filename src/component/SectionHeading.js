import React from 'react'

const SectionHeading = (props) => {
  return (
    <>
      <div className="title text-center">
        <p className="title-p b">{props.subtitle}</p>
        <h2 className="h2">{props.title}</h2>
        {/* <p className="p">
            A Private Limited is the most popular type of partnership Malta. The
            limited liability is, in fact, the only type of company allowed by
            Companies.
          </p> */}
      </div>
    </>
  );
}

export default SectionHeading