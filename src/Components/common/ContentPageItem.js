import React from 'react'
import "../../App.css";
import ContentSidebar from '../sidebar/ContentSidebar';

const isMobile = window.innerWidth < 768;
const ContentPageItem = (props) => {
    return (
        <div className="w-full h-auto flex" >
      { !isMobile ? <div className="md:w-56 px-2 md:px-0 h-auto bg-banner_bg">
        <ContentSidebar />
      </div> : null}
      <div className="components_item">{props.children}</div>
    </div>
    )
}

export default ContentPageItem
