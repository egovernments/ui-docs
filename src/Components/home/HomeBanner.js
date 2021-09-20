import React from "react";
import Banner from "../common/Banner";
import BannerImg from "../../assets/img/banner.png";

const HomeBanner = () => {
  return (
    <>
      <Banner
        heading="Design your service using DIGIT styles, components and patterns"
        para="Use this design system to make your service consistent with DIGIT. Learn from the research and experience of other service teams and avoid repeating work that’s already been done."
        Image={BannerImg}
      />
    </>
  );
};

export default HomeBanner;
