import {
  BackButton,
  Card,
  Header,
} from "@egovernments/digit-ui-react-components";
import React from "react";
import BackLinkImg from "../../assets/img/all_fresh/Back.png"

const isMobile = window.innerWidth < 768;
const BackLinks = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="pb-2">
        <Header>Backlink</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          The backlink button redirects the user back to the previous page. The
          back button is an important component guiding user navigation across
          the application, in turn, impacting user experience.
        </p>
      </div>
      <Card className="py-4">
        <img src={BackLinkImg}  alt="Back" className="h-10 w-20" />
      </Card>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          The backlink component can be used on any page that is a part of a
          multi-page transaction. For instance, filling an application form or
          submitting responses. The component should always be used in question
          pages or pages where the application seeks some information from the
          user. The idea is to make it easier for users to go back one step and
          check their responses or inputs.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When not to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          Make sure not to use this component along with breadcrumbs.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          How to Apply
        </h3>
        <ul className="list-outside list-disc pl-4">
          <li className="py-2">
            Place the backlink component at the top of the page. This way users
            do not have to scroll through the entire page to find the back
            button making it easier to navigate back to the previous page.
          </li>
          <li className="py-2">The
            backlink should redirect users to the previous page in the same
            state that they left it. It should not redirect to the application
            home page.</li>
          <li className="py-2">Hide the backlink component if JavaScript is not
            available for specific pages</li>
        </ul>
      </div>
    </div>
  );
};

export default BackLinks;
