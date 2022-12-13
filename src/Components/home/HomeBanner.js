import React from "react";
import Banner from "../common/Banner";
import BannerImg from "../../assets/img/banner.png";

const HomeBanner = () => {
  return (
    <>
      <Banner
        heading="DIGIT design standards and principles that shape the UI experience across channels"
        para="DIGIT Design System contains the inventory of reusable UI components, styles, patterns and resources required to build an application or portal. Access resources and information required to create interfaces that are visually consistent with the DIGIT platform"
        Image={BannerImg}
      />
    </>
  );
};

export default HomeBanner;
