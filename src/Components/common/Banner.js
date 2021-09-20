import React from "react";
import Container from "./Container";
import "../../App.css";

const Banner = (props) => {
  return (
    <div className="w-full bg-banner_bg flex justify-center items-center h-auto py-24 sm:h-3/4">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <div>
            <h2 className="2xl:w-3/4 md:w-5/6 w-full text-white 2xl:text-4xl xl:text-3xl lg:text-xl md:text-lg sm:text-2xl text-4xl  pb-4 font-bold font-sans leading-tight">
              {props.heading}
            </h2>
            <p className="md:w-2/3 2xl:w-1/2 w-full text-white pt-4 font-normal sm:text-xs text-lg md:text-base font-sans border-t-4 border-border">
              {props.para}
            </p>
          </div>
          <div className="banner_img sm:pt-12 pt-12 md:pt-0 flex justify-center items-center">
            <img src={props.Image} alt="banner" className="home_banner" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
