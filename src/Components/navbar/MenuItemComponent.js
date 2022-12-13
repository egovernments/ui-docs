import React, { useState} from "react";
import { Link, NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";
import SubMenuComponent from "./SubMenuComponent";

const ArrowForward = ({ className, onClick, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className={className} onClick={onClick} width="18px" height="18px" style={style}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
    </svg>
  );

const MenuItemComponent = props => {
    const { id, item, link, subItems, setNavbarOpen } = props;
    const [menuListOpen, setMenuListOpen] = useState(false);
    return (
        <li className="nav-item 2xl:px-4 px-1" key={id}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <NavLink
                activeClassName="text-border border-border"
                className="px-2 xl:px-5 py-2 text-nav flex items-center capitalize font-bold leading-snug hover:opacity-75" 
                to={link}
                onClick={() => setNavbarOpen(false)}
                >
                {item}
            </NavLink>
            <div 
            style={{marginTop: "4px", marginLeft: "64px", fontWeight: 700}} 
            onClick={() => setMenuListOpen(!menuListOpen)}> 
            <span style={{float: "right"}}>
            {menuListOpen ? <ArrowForward style={{transform: "rotate(90deg)"}}/> : <ArrowForward/>}
            </span>
            </div>
            </div>
            {subItems && menuListOpen && subItems.map((sub) => {
                return (
                <SubMenuComponent
                id={sub.id} 
                item={sub.item} 
                linkpath={sub.linkpath}
                menuListOpen={menuListOpen} 
                setNavbarOpen={setNavbarOpen}
                >                   
                </SubMenuComponent>)
            })}         
              </li> 
    );
}

export default MenuItemComponent;