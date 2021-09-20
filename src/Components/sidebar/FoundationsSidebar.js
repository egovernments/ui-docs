import React from 'react'
import { NavLink } from 'react-router-dom';
import FoundationsSidebarItems from "./FoundationsSidebarItem"

const FoundationsSidebar = () => {
    return (
        <ul className="pt-4">
      {FoundationsSidebarItems.map((data) => {
        return (
          <li
            key={data.id}
            className="leading-normal text-white py-4"
          >
            <NavLink
              className="text-lg py-4 pl-4 hover:text-border"
              activeClassName="border-l-2 border-border text-xl text-border"
              to={data.linkpath}
            >
              {data.item}
            </NavLink>
          </li>
        );
      })}
    </ul>
    )
}

export default FoundationsSidebar
