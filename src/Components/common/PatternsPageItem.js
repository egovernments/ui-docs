import React from "react";
import PatternsSidebar from "../sidebar/PatternsSidebar";

const isMobile = window.innerWidth < 768;

const PatternsPageItem = (props) => {
  return (
    <div className="w-full h-auto flex">
      { !isMobile ? <div style={{minHeight:"800px"}} className="md:w-60 px-2 md:px-0 h-auto bg-banner_bg">
        <PatternsSidebar />
      </div> : null}
      <div className="components_item">{props.children}</div>
    </div>
  );
};

export default PatternsPageItem;
