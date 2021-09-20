import React from "react";
import ResourcesSidebar from "../sidebar/ResourcesSidebar";

const ResourcesPageItem = (props) => {
  return (
    <div className="w-full h-auto flex">
      <div className="md:w-56 px-2 md:px-0 h-auto bg-banner_bg">
        <ResourcesSidebar />
      </div>
      <div className="components_item">{props.children}</div>
    </div>
  );
};

export default ResourcesPageItem;
