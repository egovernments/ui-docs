import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import DocumentsUpload from '../../assets/img/Patterns/DocumentsUpload.png'

const isMobile = window.innerWidth < 768;
const PatternDocumentsUpload = () => {
      return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "220%"} : {}}>
      <div className="mb-8">
        <Header>Documents Upload</Header>
      </div>
          <img src={DocumentsUpload} className={" pr-8  pb-8" + isMobile ? "" : "w-4/12"} alt="DocumentsUpload" style={ isMobile ? {maxWidth: "65%"} : {maxWidth: "25%"}}></img>
          </div>
  );
  
};

export default PatternDocumentsUpload;
