import React from "react";
import Navbar from "../component/Navbar";
import { CgWebsite } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { GrPlayFill, GrCertificate } from "react-icons/gr";
import { AiOutlineCode, AiOutlineMail } from "react-icons/ai";
import Service from "../component/Service";
import About from "../component/About";
import Achievement from "../component/Achievement";
import Project from "../component/Project";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      {/* header and landign page done */}
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
      {/* about us section */}
      <div className="about-section" id="about">
        {/* about us Component */}
        <About />
      </div>

      <div className="service-section" id="service">
        <Service />
      </div>
      <div className="achievement-section">
        <Achievement />
      </div>
      <div className="project-section" id="project">
        <Project />
      </div>
      <div className="contact-section" id="contact">
        <Contact />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
   
    </>
  );
};

export default Home;
