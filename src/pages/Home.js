import React from "react";
import Navbar from "../component/Navbar";
import { CgWebsite } from "react-icons/cg";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { GrPlayFill, GrCertificate } from "react-icons/gr";
import { Link } from "react-router-dom";
import {
  AiOutlineCode,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import ServiceCard from "../component/cards/ServiceCard";

const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="content-section">
          <div className="">
            <div className="intro">
              <div>
                <h1>👋</h1>
              </div>
              <div>
                <p>Hello, I am</p>
                <h2>Nabin R. Chaudhary</h2>
              </div>
            </div>
            <div className="service">
              <p>
                <CgWebsite size={20} /> Frontend
              </p>
              <p>
                <AiOutlineCode size={20} /> Backend
              </p>
            </div>
            <div className="experience">
              <p>
                <span>01</span>
              </p>
              <p>
                Years <br /> Experience
              </p>
            </div>
          </div>
          <img
            src="https://themesdesign.in/harold/layout/images/home/home-4/img.png"
            alt=""
          />
          <div className="">
            <div className="describe">
              <span>
                <GrPlayFill />
              </span>
              <p>
                I am designer during daytime & work with batman during night
              </p>
            </div>
            <div className="contact">
              <p>
                <AiOutlineMail size={20} /> nabinrchy@gmail.com
              </p>
              <p>
                <BsTelephone size={20} />
                +977 - 9742372195
              </p>
            </div>
            <div className="certified">
              <p>
                <span>
                  <GrCertificate size={35} />
                </span>
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section" id="about">
        <div className="about-content">
          <div className="left">
            <div className="about-img">
              <img
                src="https://themesdesign.in/harold/layout/images/about.png"
                alt=""
                width={385}
              />
            </div>
          </div>
          <div className="right">
            <h1>About Me</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.
            </p>

            <div className="social-icon">
              <span>
                <Link to="/facebook.com/nabinr221">
                  <BsFacebook size={30} color="#1877f2" />
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/nabinr221/">
                  <AiFillLinkedin size={30} color="#0a66c2" />
                </Link>
              </span>
              <span>
                <Link to="https://github.com/nabinr221">
                  <AiFillGithub size={30} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service-content">
          <div className="service-text">
          
            <p className="title-p">WHAT WE OFFER</p>
            <h2>Affordable Services</h2>
            <p>
              A Private Limited is the most popular type of partnership Malta.
              The limited liability is, in fact, the only type of company
              allowed by Companies.
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
      </div>
    </>
  );
};

export default Home;
