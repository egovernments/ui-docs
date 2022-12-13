import React from "react";
import { Card, Header } from "@egovernments/digit-ui-react-components";
import HeaderImg from "../../assets/img/all_fresh/Header.png"

const HeaderComponents = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header>Header</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          The Header component on the DIGIT platform screens and modules contains service
          provider details, user profile details and language options.
        </p>
      </div>
      <div className="pb-4">
        <Card className="py-4">
          <img src={HeaderImg} alt="Header" className="w-1/2" />
        </Card>
      </div>
    </div>
  );
};

export default HeaderComponents;
