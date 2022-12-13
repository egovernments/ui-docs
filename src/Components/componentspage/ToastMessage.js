import {
  ButtonSelector,
  Card,
  Header,
  HeaderBar,
  PopUp,
  SectionalDropdown,
  Toast,
} from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import ToastMessageImg from "../../assets/img/all_fresh/ToastMessage.png"
import WarningToastImg from "../../assets/img/all_fresh/WarningToast.png"
import FailureToastImg from "../../assets/img/all_fresh/FailureToast.png"

const ToastMessage = () => {
  const [click, setClick] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const isMobile = window.innerWidth < 768;
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="pb-2">
        <Header>Toast Message</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          The Toast component is used to provide users with temporary notifications. It does not require any user action.
        </p>
      </div>
      <Card className="py-4">
        <div className="flex items-center">
          <img src={ToastMessageImg} alt="Toast Message" className="w-1/2" />
          <img src={FailureToastImg} alt="Toast Message" className="w-1/2 ml-2" />
        </div>
        <img src={WarningToastImg} alt="Toast Message" className="w-1/2 mt-8" />
      </Card>
      <div className="sm:w-3/5 w-full py-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">When to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Use the Toast component to display failure, success, or warning messages to the users.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">When not to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
         Toast should not be used to display any high-priority alerts, errors, or information that require any kind of user response. 
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          How to Apply
        </h3>
        


        <ul className="list-outside list-disc pl-4">
          <li className="py-2">Use simple, concise sentences to convey the toast message. For example, Action completed
          successfully</li>

          <li className="py-2">Apply specific colour schemes to reflect the nature of the message. For instance, green is used to display success messages and red for failure messages.</li>


          <li className="py-2">Add a suitable icon before the text to indicate the type of information displayed.</li>

        </ul>
      </div>
    </div>
  );
};

export default ToastMessage;
