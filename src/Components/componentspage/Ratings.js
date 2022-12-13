import { Header, Rating } from "@egovernments/digit-ui-react-components";
import React from "react";

const isMobile = window.innerWidth < 768;
const Ratings = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="pb-2">
        <Header>Rating</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs pb-2 lg:text-sm 2xl:text-base">
          {`<Rating withText={true} text="Rating" currentRating="3" />`} Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laudantium voluptates quaerat officiis
          architecto nam repudiandae veniam in ipsam, repellendus accusantium
          cumque nostrum id officia aliquam dolore vitae expedita adipisci
          animi.
        </p>
      </div>
      <div className="pb-2">
      <Rating withText={true} text="Rating" currentRating={3} />
      </div>
    </div>
  );
};

export default Ratings;
