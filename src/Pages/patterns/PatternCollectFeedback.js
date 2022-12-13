import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import CollectFeedback from '../../assets/img/Patterns/CollectFeedback.png'

const isMobile = window.innerWidth < 768;
const PatternCollectFeedback = () => {
      return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "220%"} : {}}>
      <div className="mb-8">
        <Header>Collect Feedback</Header>
      </div>
          <img src={CollectFeedback} className={" pr-8  pb-8" + isMobile ? "" : "w-1/2"} alt="CollectFeedback" style={ isMobile ? {maxWidth: "70%"} : {maxWidth: "60%"}}></img>
          </div>
  );
  
};

export default PatternCollectFeedback;
