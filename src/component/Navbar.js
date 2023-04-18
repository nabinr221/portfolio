import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import navItems from "../config/navItems.json";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  return (
    <>
      <div className="navbar-section">
        <div className="logo">
          <h1>
            <Link to={"/"} className="navlink">
              Meet <span> Me</span>
            </Link>
          </h1>
        </div>
        <div className="navbar-nav">
          <ul>
            {navItems?.map((item, id) => {
              return (
                <li>
                  <Link className="navlink" to={item.link} key={id}>
                    {item.lable}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cv-btn">Downlaod CV</div>
        <div className="menuIcon">
          <AiOutlineAlignRight size={25} onClick={() => setOpenMenu(true)} />
        </div>

        {openMenu ? (
          <div className="mbl-navbar-nav">
            <div onClick={() => setOpenMenu(false)} className="close-icon">
              <AiOutlineClose size={25}/>
            </div>
            <ul>
              {navItems?.map((item, id) => {
                return (
                  <li>
                    <Link className="mbl-navlink" to={item.link} key={id}>
                      {item.lable}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
