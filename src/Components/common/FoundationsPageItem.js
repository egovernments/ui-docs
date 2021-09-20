import React from "react";
import FoundationsSidebar from "../sidebar/FoundationsSidebar";

const FoundationsPageItem = (props) => {
  return (
    <div className="w-full h-auto flex">
      <div className="md:w-56 px-2 md:px-0 h-auto bg-banner_bg">
        <FoundationsSidebar />
      </div>
      <div className="components_item">{props.children}</div>
    </div>
  );
};

export default FoundationsPageItem;
