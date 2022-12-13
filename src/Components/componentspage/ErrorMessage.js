import { Card, FormStep, Header } from "@egovernments/digit-ui-react-components";
import React from "react";
import AlertImg from "../../assets/img/all_fresh/Alert.png"

const ErrorMessage = () => {
  const isMobile = window.innerWidth < 768;
  const onSelect=()=>{
    console.log("hello")
  }
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header>Error Message</Header>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          Overview
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          Error message component is used to provide an explanation to the user
          on what went wrong and what should be the next step to fix the issue.
        </p>
      </div>
      <Card className="py-4">
      <img src={AlertImg} alt="error" className="w-1/2" />
      </Card>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          The error message component should be displayed when there is an input
          validation error. Any other messages should follow the standard
          message format.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When not to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          Do not use the error message component while users are typing or move
          to a different field or tab. The error message should provide the next
          step that the user should take. It should also provide the users with
          a way to leave the transaction instead of blocking the navigation.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          How to Apply
        </h3>
        <ul className="list-outside list-disc pl-4">
          <li className="py-2">
            {" "}
            The error message should appear in red after the question or hint
            text{" "}
          </li>

          <li className="py-2">
            Use a red border to provide a visual indication of where the error
            occurred - for instance, if the user entered an invalid date range,
            the date field is highlighted within a red border along with the
            error message{" "}
          </li>

          <li className="py-2">
            Make sure the error message is displayed in plain, simple and
            concise language.
          </li>

          <li className="py-2">
            Do not use technical jargon in the error message.{" "}
          </li>

          <li className="py-2">
            Use consistent message formats across the application to avoid
            confusion and reduce cognitive load on users
          </li>

          <li className="py-2">
            Use specific message text to make it relevant and helpful{" "}
          </li>
          <li className="py-2">
            Provide clear instructions and brief descriptions on what is
            required and the next steps
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorMessage;
