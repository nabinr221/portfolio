import React from "react";
import TestimonialCard from "./cards/TestimonialCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonial = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 544,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="testimonial-content">
        <div className="title text-center">
          <p className="title-p b">TESTIMONIAL</p>
          <h2 className="h2">People talk about us</h2>
          <p className="p">
            A Private Limited is the most popular type of partnership Malta. The
            limited liability is, in fact, the only type of company allowed by
            Companies.
          </p>
        </div>
        <div className="testimonial-card-grp">
          <Slider {...settings}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
