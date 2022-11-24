import React, { useState } from "react";
import { Card, Header, TopBar } from "@egovernments/digit-ui-react-components";
import HeaderImg from "../../assets/img/components/Header.png"

const HeaderComponents = () => {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const logoUrl = "https://qa.digit.org/egov-dev-assets/mseva-logo-white.png";
  const handleLogout =()=>{
    console.log("logout")
  }
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-4">
        <Header>Header</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          The Header component on the DIGIT platform screens and modules contains service
          provider details, user profile details and language options.
        </p>
      </div>
      <div className="pb-4">
        <Card className="py-4">
          {/* <img src={HeaderImg} alt="Header" className="w-1/2" /> */}
          <TopBar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            handleLogout={handleLogout}
            logoUrl={logoUrl}
          />
        </Card>
      </div>
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
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">How to Apply</h2>
        <ul className="list-disc list-inside">
          <li className="md:text-xs lg:text-sm 2xl:text-base py-2"> The error message should appear in red after the question or hint text</li>

          <li className="md:text-xs lg:text-sm 2xl:text-base py-2"> Use a red border to provide a visual indication of where the error occurred - for instance,
            if the user entered an invalid date range, the date field is highlighted within a red border
            along with the error message
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base py-2"> Make sure the error message is displayed in plain, simple and concise language.
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base py-2"> Do not use technical jargon in the error message.
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base py-2"> Use consistent message formats across the application to avoid confusion and reduce
            cognitive load on users
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base py-2"> Use specific message text to make it relevant and helpful
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base py-2"> Provide clear instructions and brief descriptions on what is required and the next steps
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponents;
