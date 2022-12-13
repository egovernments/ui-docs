import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import CitySelection from '../../assets/img/Patterns/CitySelection.png'

const isMobile = window.innerWidth < 768;
const PatternCitySelection = () => {
      return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "220%"} : {}}>
      <div className="mb-8">
        <Header>City Selection</Header>
      </div>
          <img src={CitySelection} style={ isMobile ? {maxWidth: "65%"} : {maxWidth: "25%"}} className={" pr-8  pb-8" + isMobile ? "" : "w-4/12"} alt="CitySelection" ></img>
          </div>
  );
  
};

export default PatternCitySelection;
