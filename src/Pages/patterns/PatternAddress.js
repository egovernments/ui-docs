import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import Address from '../../assets/img/Patterns/Address.png'

const isMobile = window.innerWidth < 768;
const PatternAddress = () => {
      return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "220%"} : {}}>
      <div className="mb-8">
        <Header>Address</Header>
      </div>
          <img src={Address} className={" pr-8  pb-8" + isMobile ? "" : "w-11/12"} alt="Address" style={ isMobile ? {maxWidth: "80%"} : {maxWidth: "100%"}}></img>
          </div>
  );
  
};

export default PatternAddress;
