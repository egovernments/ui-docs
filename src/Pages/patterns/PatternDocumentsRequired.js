import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import DocumentsRequired from '../../assets/img/Patterns/DocumentsRequired.png'

const isMobile = window.innerWidth < 768;
const PatternDocumentsRequired = () => {
      return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "220%"} : {}}>
      <div className="mb-8">
        <Header>Documents Required</Header>
      </div>
          <img src={DocumentsRequired} className={" pr-8  pb-8" + isMobile ? "" : "w-4/12"} alt="DocumentsRequired" style={ isMobile ? {maxWidth: "65%"} : {maxWidth: "25%"}}></img>
          </div>
  );
  
};

export default PatternDocumentsRequired;
