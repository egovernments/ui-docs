import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Card from "../common/Card";

const ComponentsCard = (props) => {
  return (
    <Link to={props.linkpath}>
      <Card>
        <div className="px-4 py-8">
          <div className="pt-2">
            <img src={props.Image} alt="" style={{ width: "88px" }} />
          </div>
          <div>
            <h2 className="2xl:text-2xl lg:text-xl sm:text-base font-bold mt-2 mb-1">
              {props.heading}
            </h2>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ComponentsCard;
