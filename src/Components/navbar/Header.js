import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/DIGIT.png";
import "../../App.css";
import MenuData from "./MenuItem";
import SearchIcon from "../../assets/img/search.png";
import Container from "../common/Container";
import SubMenuComponent from "./SubMenuComponent";
import MenuItemComponent from "./MenuItemComponent";
export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [menuListOpen, setMenuListOpen] = React.useState(false);
  const isMobile = window.innerWidth < 768;
  return (
    // to make the orange border to be at the edge we have to remove bottom padding in nav(use py-4 to get previous look)
    <nav className="relative flex flex-wrap navbar_shadow bg-white items-center justify-between px-4 pt-6 pb-0"
    style={isMobile && navbarOpen
    ? 
    {
      position: "fixed", 
      backgroundColor: "rgba(255,255,255,1)", 
      height: "-webkit-fill-available", 
      marginLeft: "-30px",
      width: "70%",
      overflow: "auto",
      alignItems: "start" 
    }
      : {}}>
    <Container>
      <div className="lg:flex items-center justify-between block">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <button
            className="text-border cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {!navbarOpen ? <i className="fa fa-bars" style={{color:"black"}}></i> : <i class="fas fa-times" style={{color:"black"}}></i>}
            {/* <div className="w-8 h-1 bg-red-400 my-1.5" style={{display: navbarOpen && 'none'}}></div>
            <div className="w-8 h-1 bg-red-400 my-1.5" style={{transform: navbarOpen && 'rotate(45deg)'}}></div>
            <div className="w-8 h-1 bg-red-400 my-1.5" style={{transform: navbarOpen && 'rotate(-45deg)'}}></div> */}
          </button>
          <Link to="/ui-docs">
            <img src={logo} alt="logo" className="navbar-logo mb-3" style={isMobile ? {marginTop: "5px"} : {}} />
          </Link>
        </div>
        <div
          className={
            "lg:flex items-center justify-between py-4 sm:py-0" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
          // style={isMobile ? {position: "fixed", backgroundColor: "rgba(255,255,255,1)", height: "-webkit-fill-available", marginLeft: "-30px" }: {}}
        >
          {isMobile 
          ? <ul className="flex flex-col lg:flex-row list-none" style={{maxWidth: "max-content"}}>
          {MenuData.map((data) => {
            return (
              <MenuItemComponent
              id={data.id} 
              item={data.item} 
              link={data.link}
              subItems={data.subItems ? data.subItems : null}
              setNavbarOpen={setNavbarOpen}
              ></MenuItemComponent>
            );
          })}
        </ul>  
          : <ul className="flex flex-col lg:flex-row list-none">
            {MenuData.map((data) => {
              return (
                <li className="nav-item 2xl:px-4 px-1" key={data.id}  onClick={() => setNavbarOpen(false)}>
                  <NavLink
                    activeClassName="border-b-2  border-border"
                    className="px-2 xl:px-5 py-2 text-nav flex items-center capitalize font-normal leading-snug hover:opacity-75" 
                    to={data.link}
                  >
                    {data.item}
                  </NavLink>
                </li>
              );
            })}
          </ul>}
         </div>
        </div>
        </Container>
    </nav>
  );
}
