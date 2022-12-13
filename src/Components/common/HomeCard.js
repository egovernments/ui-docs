import React from "react";
import { Link } from "react-router-dom";
import arrowSign from "../../assets/img/arrow.png";
import Card from "./Card";

const HomeCard = (props) => {
  return (
    <Card>
      <div className="flex items-start 2xl:px-10 2xl:py-12 px-8 py-8">
        <div>
          <img src={props.brandLogo} alt={props.heading} />
        </div>
        <div className=" 2xl:px-10 xl:px-6 px-4">
          <h2 className="xl:text-2xl lg:text-xl md:text-sm  sm:text-xs font-bold ">
            {props.heading}
          </h2>
          <p className="xl:text-base md:text-sm sm:text-xs py-2">{props.text}</p>
          <Link
            to={props.link}
            className="text-border xl:text-base md:text-sm sm:text-xs flex items-center"
          >
            {props.linkContent}{" "}
            <span>
              <img src={arrowSign} alt="->" className="w-4 pl-1" />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default HomeCard;
