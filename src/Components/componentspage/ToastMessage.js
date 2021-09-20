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

const ToastMessage = () => {
  const [click, setClick] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="pb-2">
        <Header>Toast Message</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          The Tag component is used to display the status of specific user actions.
        </p>
      </div>
      <Card className="py-4">
        <img src={ToastMessageImg} alt="Toast Message" className="w-1/2" />
      </Card>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Guidelines</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Use the component design guideline below to ensure visual consistency across the
          platform.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          The error message component should be displayed when there is an input validation error.
          Any other messages should follow the standard message format.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When not to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Do not use the error message component while users are typing or move to a different field
          or tab. The error message should provide the next step that the user should take. It should
          also provide the users with a way to leave the transaction instead of blocking the navigation.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          How to Apply
        </h3>
        <ul className="list-outside list-disc pl-4">
          <li className="py-2">The error message should appear in red after the question or hint text</li>

          <li className="py-2">Use a red border to provide a visual indication of where the error occurred - for instance,
            if the user entered an invalid date range, the date field is highlighted within a red border</li>
          along with the error message

          <li className="py-2">ake sure the error message is displayed in plain, simple and concise language.</li>

          <li className="py-2">o not use technical jargon in the error message.</li>

          <li className="py-2">se consistent message formats across the application to avoid confusion and reduce
            cognitive load on users</li>

          <li className="py-2">se specific message text to make it relevant and helpful</li>

          <li className="py-2">rovide clear instructions and brief descriptions on what is required and the next steps</li>
        </ul>
      </div>
    </div>
  );
};

export default ToastMessage;
