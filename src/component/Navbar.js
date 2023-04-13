import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-section">
        <div className="logo">
          <h1>
            Meet <span> Me</span>{" "}
          </h1>
        </div>
        <div className="navbar-nav">
          <ul>
            <li>
              <Link className="navlink" to={""}>
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <a className="navlink" href={"#about"}>
                {" "}
                About Us{" "}
              </a>
            </li>
            <li>
              <a className="navlink" href={"#service"}>
                Service
              </a>
            </li>
            <li>
              <Link className="navlink" to={"#project"}>
                Projects
              </Link>
            </li>

            <li>
              <Link className="navlink" to={"#tesimonial"}>
                Testimonial
              </Link>
            </li>
            {/* <li>
              <Link className="navlink" to={"#blog"}>
                {" "}
                Blog{" "}
              </Link>
            </li> */}
            <li>
              <Link className="navlink" to={"#contact "}>
                {" "}
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="cv-btn">Downlaod CV</div>
      </div>
    </>
  );
};

export default Navbar;
