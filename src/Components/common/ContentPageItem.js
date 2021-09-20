import React from 'react'
import "../../App.css";
import ContentSidebar from '../sidebar/ContentSidebar';

const ContentPageItem = (props) => {
    return (
        <div className="w-full h-auto flex">
      <div className="md:w-56 px-2 md:px-0 h-auto bg-banner_bg">
        <ContentSidebar />
      </div>
      <div className="components_item">{props.children}</div>
    </div>
    )
}

export default ContentPageItem
