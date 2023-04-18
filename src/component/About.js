import React from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const About = () => {
  return (
    <>
      <div className="about-content">
        <div className="left" id="order-2">
          <div className="about-img">
            <img
              src="https://themesdesign.in/harold/layout/images/about.png"
              alt=""
              width={385}
            />
          </div>
        </div>
        <div className="right" id="order-1">
          <h1>About Me</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
          </p>

          <div className="social-icon">
            <span>
              <Link to="/facebook.com/nabinr221">
                <BsFacebook color="#1877f2" />
              </Link>
            </span>
            <span>
              <Link to="https://www.linkedin.com/in/nabinr221/">
                <AiFillLinkedin color="#0a66c2" />
              </Link>
            </span>
            <span>
              <Link to="https://github.com/nabinr221">
                <AiFillGithub />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
