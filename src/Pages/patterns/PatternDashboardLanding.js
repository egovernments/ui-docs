import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import DashboardLanding from '../../assets/img/Patterns/DashboardLanding.png'

const isMobile = window.innerWidth < 768;
const PatternDashboardLanding = () => {
      return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "220%"} : {}}>
      <div className="mb-8">
        <Header>DashboardLanding</Header>
      </div>
          <img src={DashboardLanding} className={" pr-8  pb-8" + isMobile ? "" : "w-4/5"} alt="ComingSoonImg" style={ isMobile ? {maxWidth: "80%"} : {maxWidth: "65%"}}></img>
          </div>
  );
  
};

export default PatternDashboardLanding;
