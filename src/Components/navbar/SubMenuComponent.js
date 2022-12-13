import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SubMenuComponent = props => {
    const { id, item, linkpath, menuListOpen, setNavbarOpen } = props;
    // const [menuListOpen, setMenuListOpen] = useState(false);
    return ( 
    <ul className="flex flex-col lg:flex-row list-none" style={{ display: menuListOpen ? "flex" : "none"}}>
        <li className="nav-item 2xl:px-4 px-1" key={id}>
            <NavLink
                activeClassName="text-border divide-x-2 border-border"
                className="px-2 xl:px-5 py-2 text-nav flex items-center capitalize font-normal leading-snug hover:opacity-75" 
                to={linkpath}
                onClick={() => setNavbarOpen(false)}
            >
                {item}
            </NavLink>
        </li>               
    </ul>
    );
}

export default SubMenuComponent;