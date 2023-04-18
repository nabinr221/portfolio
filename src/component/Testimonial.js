import React from "react";
import TestimonialCard from "./cards/TestimonialCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionHeading from "./SectionHeading";
import TestimonialData from "../config/TestimonialData.json"

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
        <SectionHeading
          subtitle={"TESTIMONIAL"}
          title={"People talk about us"}
        />

        <div className="testimonial-card-grp">
          <Slider {...settings}>
            {TestimonialData?.map((item, id) => {
              return <TestimonialCard item={item} key={id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
