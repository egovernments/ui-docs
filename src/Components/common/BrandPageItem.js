import React from "react";
import "../../App.css";
import BrandSidebar from "../sidebar/BrandSidebar";

const isMobile = window.innerWidth < 768;
const BrandPageItem = (props) => {
  return (
    <div className="w-full h-auto flex">
      {!isMobile ? <div className="md:w-56 px-2 md:px-0 h-auto bg-banner_bg">
        <BrandSidebar />
      </div> : null}
      <div className="components_item">{props.children}</div>
    </div>
  );
};

export default BrandPageItem;
