import React from "react";
import { BsFacebook, BsArrowRight } from "react-icons/bs";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-info">
            <h2>
              Meet <span>Me</span>
            </h2>
            <p>
              A Private Limited is the most popular type of partnership Malta.
              The limited liability is, in fact, the only type of company
              allowed by Companies.
            </p>
            <div className="socail-icon">
              <span>
                <BsFacebook />
              </span>
              <span>
                <AiOutlineTwitter />
              </span>
              <span>
                <AiFillGithub />
              </span>
              <span>
                <AiFillLinkedin />
              </span>
            </div>
          </div>
          <div className="footer-links">
            <h2>Other Links</h2>
            <ul>
              <li>
                <BsArrowRight />
                <p> Security & Provciy</p>
              </li>
              <li>
                <BsArrowRight />
                <p> Support</p>
              </li>
              <li>
                <BsArrowRight />
                <p> Term & Condition</p>
              </li>
              <li>
                <BsArrowRight />
                <p> Contact</p>
              </li>
              <li>
                <BsArrowRight />
                <p>About Us</p>
              </li>
            </ul>
          </div>

          <div className="newsletter">
            <h2>Sign up</h2>
            <p>Follow our newsletter to stay updated about agency.</p>
            <div className="subscribe-input">
              <input type="text " placeholder="Subscribe " />
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 copyright | Desing by: Nabin R. Chaudhary</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
