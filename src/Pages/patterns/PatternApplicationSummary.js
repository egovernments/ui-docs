import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import ApplicationSummary from '../../assets/img/Patterns/ApplicationSummary.png'

const isMobile = window.innerWidth < 768;
const PatternApplicationSummary = () => {
      return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "220%"} : {}}>
      <div className="mb-8">
        <Header>Application Summary</Header>
      </div>
          <img src={ApplicationSummary} className={" pr-8  pb-8" + isMobile ? "" : "w-4/12"} alt="ApplicationSummary" style={ isMobile ? {maxWidth: "65%"} : {maxWidth: "25%"}}></img>
          </div>
  );
  
};

export default PatternApplicationSummary;
