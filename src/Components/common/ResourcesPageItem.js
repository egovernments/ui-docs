import React from "react";
import ResourcesSidebar from "../sidebar/ResourcesSidebar";

const isMobile = window.innerWidth < 768;
const ResourcesPageItem = (props) => {
  return (
    <div className="w-full h-auto flex">
      {!isMobile ? <div style={{minHeight:"800px"}} className="md:w-56 px-2 md:px-0 h-auto bg-banner_bg">
        <ResourcesSidebar />
      </div> : null}
      <div className="components_item">{props.children}</div>
    </div>
  );
};

export default ResourcesPageItem;
