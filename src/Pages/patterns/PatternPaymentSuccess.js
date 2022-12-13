import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import PaymentSuccess from '../../assets/img/Patterns/PaymentSuccess.png'

const isMobile = window.innerWidth < 768;
const PatternPaymentSuccess = () => {
      return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "155%"} : {}}>
      <div className="mb-8">
        <Header>Payment Success</Header>
      </div>
          <img src={PaymentSuccess}style={ isMobile ? {maxWidth: "100%"} : {maxWidth: "30%"}} className={" pr-8  pb-8" + isMobile ? "w-4/4" : "w-4/12"} alt="PaymentSuccess"></img>
          </div>
  );
  
};

export default PatternPaymentSuccess;
