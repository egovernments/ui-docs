import {
  BreadCrumb,
  Card,
  Header,
} from "@egovernments/digit-ui-react-components";
import React from "react";
import BreadCrumImg from "../../assets/img/all_fresh/Breadcrumb.png"

const BreadCrumbs = () => {
  const crumbs = [
    {
      path: "/",
      content: "Home",
      show: true,
    },
    {
      path: "/page1",
      content: "page1",
      show: true,
    },
  ];
  return (
    <div className="md:w-5/6 w-full mb-60">
      <BreadCrumb crumbs={crumbs} />
      <div className="pb-2">
        <Header>Bread Crumbs</Header>
      </div>
      <div className="content_main">
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            Overview
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Breadcrumbs provide the user with the current location on the site
            or the application. Users can trace the path to the current page and
            the listed page hierarchy order.
          </p>
        </div>
      </div>
      <div className="py-b">
        <Card className="py-4">
          <img src={BreadCrumImg} alt="Bread crumb" />
        </Card>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h2 className="2xl:text-3xl xl:text-3xl md:text-2xl sm:text-lg font-bold">
          Guidelines
        </h2>
        <p className="2xl:text-lg sm:text-sm">
          The guidelines below specify the DIGIT principles applied to the
          design and deployment of the breadcrumbs component.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          Use the breadcrumbs component when you want to specify the hierarchy
          of the current page and help the users track the location back to the
          parent page.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When not to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          Do not use breadcrumbs to show user paths in linear or flat website
          structures.
        </p>
        <p>
          {" "}
          Breadcrumbs may not be required when menu sidebars are available on
          the application pages to help find users the path to the current page
          or navigate to the parent page.
        </p>
      </div>

      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          How to Apply
        </h3>
        <ul className="list-outside list-disc pl-4">
          <li className="py-2">
            Place breadcrumbs before the content element on the top of the page.
          </li>
          <li>
            Add the breadcrumbs to the page templates to ensure this component
            is positioned consistently across pages within the application.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
