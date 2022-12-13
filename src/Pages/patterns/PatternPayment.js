import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import Payment from '../../assets/img/Patterns/Payment.png'

const isMobile = window.innerWidth < 768;
const PatternPayment = () => {
      return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "125%"} : {}}>
      <div className="mb-8">
        <Header>Payment</Header>
      </div>
          <img src={Payment} className={" pr-8  pb-8" + isMobile ? "" : "w-4/12"} alt="Payment" style={ isMobile ? {maxWidth: "125%"} : {maxWidth: "30%"}}></img>
          </div>
  );
  
};

export default PatternPayment;
