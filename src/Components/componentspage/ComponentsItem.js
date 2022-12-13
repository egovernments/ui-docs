import React from "react";
import ComponentsCard from "./ComponentsCard";
import ComponentsImg1 from "../../assets/img/components/1.png";
import ComponentsImg2 from "../../assets/img/components/2.png";
import ComponentsImg3 from "../../assets/img/components/3.png";
import ComponentsImg4 from "../../assets/img/components/4.png";
import ComponentsImg5 from "../../assets/img/components/5.png";
import ComponentsImg6 from "../../assets/img/components/6.png";
import ComponentsImg7 from "../../assets/img/components/7.png";
import ComponentsImg8 from "../../assets/img/components/8.png";
import ComponentsImg9 from "../../assets/img/components/9.png";
import ComponentsImg10 from "../../assets/img/components/10.png";
import ComponentsImg11 from "../../assets/img/components/11.png";
import ComponentsImg12 from "../../assets/img/components/12.png";
import ComponentsImg13 from "../../assets/img/components/13.png";
import ComponentsImg14 from "../../assets/img/components/14.png";
import ComponentsImg15 from "../../assets/img/components/15.png";
import ComponentsImg16 from "../../assets/img/components/16.png";
import ComponentsImg17 from "../../assets/img/components/17.png";
import ComponentsImg18 from "../../assets/img/components/18.png";
import ComponentsImg19 from "../../assets/img/components/19.png";
import ComponentsImg20 from "../../assets/img/components/20.png";
import ComponentsImg21 from "../../assets/img/components/21.png";
import ComponentsImg22 from "../../assets/img/components/22.png";
import ComponentsImg23 from "../../assets/img/components/23.png";
import ComponentsImg24 from "../../assets/img/components/24.png";
import ComponentsImg25 from "../../assets/img/components/25.png";
import ComponentsImg26 from "../../assets/img/components/26.png";
import ComponentsImg27 from "../../assets/img/components/27.png";
import ComponentsImg28 from "../../assets/img/components/28.png";
import ComponentsImg29 from "../../assets/img/components/29.png";
import { Header } from "@egovernments/digit-ui-react-components";

const Data = [
  {
    id: 1,
    Image: ComponentsImg1,
    heading: "Header",
    linkpath: "/ui-docs/components/header",
  },
  {
    id: 2,
    Image: ComponentsImg2,
    heading: "Back Link",
    linkpath: "/ui-docs/components/backlink",
  },
  {
    id: 3,
    Image: ComponentsImg3,
    heading: "Bread Crumbs",
    linkpath: "/ui-docs/components/breadcrumbs",
  },
  {
    id: 4,
    Image: ComponentsImg4,
    heading: "Buttons",
    linkpath: "/ui-docs/components/button",
  },
  {
    id: 5,
    Image: ComponentsImg5,
    heading: "Checkbox",
    linkpath: "/ui-docs/components/checkbox",
  },
  {
    id: 6,
    Image: ComponentsImg6,
    heading: "Panel",
    linkpath: "/ui-docs/components/panel",
  },
  {
    id: 7,
    Image: ComponentsImg7,
    heading: "Radio",
    linkpath: "/ui-docs/components/radio-buttons",
  },
  {
    id: 8,
    Image: ComponentsImg8,
    heading: "Select",
    linkpath: "/ui-docs/components/select",
  },
  {
    id: 9,
    Image: ComponentsImg9,
    heading: "Text Input",
    linkpath: "/ui-docs/components/text-input",
  },
  {
    id: 10,
    Image: ComponentsImg10,
    heading: "Inset Text",
    linkpath: "/ui-docs/components/inset-text",
  },
  {
    id: 11,
    Image: ComponentsImg11,
    heading: "SideNav",
    linkpath: "/ui-docs/components/side-nav",
  },
  {
    id: 12,
    Image: ComponentsImg16,
    heading: "Toast",
    linkpath: "/ui-docs/components/toast-message",
  },
  {
    id: 13,
    Image: ComponentsImg17,
    heading: "Popup",
    linkpath: "/ui-docs/components/pop-up",
  },
  {
    id: 14,
    Image: ComponentsImg18,
    heading: "Tag",
    linkpath: "/ui-docs/components/tag",
  },
  {
    id: 15,
    Image: ComponentsImg19,
    heading: "Tabs",
    linkpath: "/ui-docs/components/tabs",
  },
  {
    id: 16,
    Image: ComponentsImg20,
    heading: "Table",
    linkpath: "/ui-docs/components/table",
  },
  {
    id: 17,
    Image: ComponentsImg21,
    heading: "summary List",
    linkpath: "/ui-docs/components/summary-list",
  },
  {
    id: 18,
    Image: ComponentsImg22,
    heading: "Pagination",
    linkpath: "/ui-docs/components/pagination",
  },
  {
    id: 19,
    Image: ComponentsImg23,
    heading: "Date Input",
    linkpath: "/ui-docs/components/date-input",
  },
  {
    id: 20,
    Image: ComponentsImg24,
    heading: "Error Message",
    linkpath: "/ui-docs/components/error-message",
  },
  {
    id: 21,
    Image: ComponentsImg25,
    heading: "Skip Link",
    linkpath: "/ui-docs/components/skip-link",
  },
  {
    id: 22,
    Image: ComponentsImg26,
    heading: "File Upload",
    linkpath: "/ui-docs/components/upload-file",
  },
  {
    id: 23,
    Image: ComponentsImg27,
    heading: "Footer",
    linkpath: "/ui-docs/components/footer",
  },
  {
    id: 24,
    Image: ComponentsImg28,
    heading: "Phase Banner",
    linkpath: "/ui-docs/components/phase-banner",
  },
  {
    id: 25,
    Image: ComponentsImg29,
    heading: "Notification Banner",
    linkpath: "/ui-docs/components/notification-banner",
  }
];

const isMobile = window.innerWidth < 768;
const ComponentsItem = () => {
  return (
    <>
      <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
        <div className="pb-2 sm:w-3/5 w-full">
          <Header>Components</Header>
          <p className="md:text-xs lg:text-sm 2xl:text-base py-4">
            A complete guide to use and apply the various visual components used
            on the DIGIT platform to ensure consistency in design across modules
            and screens.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 my-2">
          {Data.map((item) => {
            return (
              <ComponentsCard
                Image={item.Image}
                heading={item.heading}
                key={item.id}
                linkpath ={item.linkpath}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ComponentsItem;
