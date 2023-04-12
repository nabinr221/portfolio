import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiRightArrowAlt } from "react-icons/bi";

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style,padding:"1rem", background: "" , border:"1px solid blue" }}
//       onClick={onClick}
//     />
//   );
// }

const Project = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="project-content">
        <div className="project-text">
          <div className="titles">
            <h2>My Latest Work</h2>
            <p>Prefect solution for digital experience</p>
          </div>
          <div className="more-link">
            <p>
              More Work <hr />
            </p>
            <span>
              <BiRightArrowAlt size={25} />
            </span>
          </div>
        </div>

        <div className="project-slider">
          <Slider {...settings}>
            <div className="project-card">
              <div className="card-img">
                <img
                  src="https://www.iwantclarity.com/wp-content/uploads/2018/10/Website-Redesign-More-Than-Just-Aesthetics@2x-100.jpg"
                  alt=""
                />
              </div>
              <div className="project-title">
                <h2>
                  <span> Android App Desing</span>
                </h2>
                <p>Moble App</p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-img">
                <img
                  src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg"
                  alt=""
                />
              </div>
              <div className="project-title">
                <h2>
                  <span>E-commerce web app 2</span>
                </h2>
                <p>Mobile App & Web App </p>
              </div>
            </div>

            <div className="project-card">
              <div className="card-img">
                <img
                  src="https://www.iwantclarity.com/wp-content/uploads/2018/10/Website-Redesign-More-Than-Just-Aesthetics@2x-100.jpg"
                  alt=""
                  width={400}
                />
              </div>
              <div className="project-title">
                <h2>
                  <span>E-commerce web app 3</span>
                </h2>
                <p>Mobile App & Web App </p>
              </div>
            </div>

            <div className="project-card">
              <div className="card-img">
                <img
                  src="https://www.thecreativemomentum.com/hs-fs/hubfs/blog-files/2007%20batch/2007-10-Sites%20for%20Web%20Design%20Inspiration-h-1.jpg?width=600&name=2007-10-Sites%20for%20Web%20Design%20Inspiration-h-1.jpg"
                  alt=""
                />
              </div>
              <div className="project-title">
                <h2>
                  <span>E-commerce web app 4</span>
                </h2>
                <p>Mobile App & Web App </p>
              </div>
            </div>

            <div className="project-card">
              <div className="card-img">
                <img
                  src="https://www.iwantclarity.com/wp-content/uploads/2018/10/Website-Redesign-More-Than-Just-Aesthetics@2x-100.jpg"
                  alt=""
                />
              </div>
              <div className="project-title">
                <h2>
                  <span>E-commerce web app 4</span>
                </h2>
                <p>Mobile App & Web App </p>
              </div>
            </div>
            <div className="project-card">
              <div className="card-img">
                <img
                  src="https://www.thecreativemomentum.com/hs-fs/hubfs/blog-files/2007%20batch/2007-10-Sites%20for%20Web%20Design%20Inspiration-h-1.jpg?width=600&name=2007-10-Sites%20for%20Web%20Design%20Inspiration-h-1.jpg"
                  alt=""
                  width={400}
                />
              </div>
              <div className="project-title">
                <h2>
                  <span>E-commerce web app</span>
                </h2>
                <p>Mobile App & Web App </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Project;
