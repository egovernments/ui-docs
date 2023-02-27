import {
  Card,
  CardCaption,
  CardHeader,
  CardLabel,
  CardLabelDesc,
  CardLabelError,
  CardSectionHeader,
  CardSubHeader,
  CardText,
  CardTextButton,
  Header,
  InputCard,
  LinkLabel,
  MultiLink,
  MultiSelectDropdown,
} from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { desktopData, mobileData } from "./TypographyItem";

const Typography = () => {
  const [showOptions, setShowOptions] = useState(false);
  const isMobile = window.innerWidth < 768;
  const handleClick = () => {
    setShowOptions(false);
  };


  const dowloadOptions = [
    {
      label: "This is multilink 1",
      onclick: handleClick,
    },
    {
      label: "This is multilink 2",
      onclick: handleClick,
    },
    {
      label: "This is multilink 3",
      onclick: handleClick,
    },
  ];

  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="pb-2">
        <Header>Typography</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Clear font, consistent heading styles, and structured paragraphs help
          in creating a visual pattern for users interacting with the
          application.
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-4">
          This page lists the types of fonts used in the DIGIT platform. It is
          recommended to use the specific styles outlined below to ensure
          consistency in the application interface.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Guidelines</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Follow the prescribed typography style guidelines as given below to
          create clear hierarchies, organize information and guide the users
          through the interface.
        </p>
      </div>
      <div className="grid grid-cols-2 pb-4">
        <div className="mobile">
          <div className="py-2">
            <h4 className="text-xl font-semibold">Mobile</h4>
          </div>
          {mobileData.map((data) => {
            return (
              <div
                style={{ paddingTop: `${data.topPading}` }}
                className="py-2"
                key={data.id}
              >
                <h1
                  style={{
                    fontSize: `${data.fontsize}`,
                    fontWeight: `${data.fontWeight}`,
                    color: `${data.fontColor}`,
                  }}
                >
                  {data.item}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="desktop">
          <div className="py-2">
            <h4 className="text-xl font-semibold">Desktop</h4>
          </div>
          {desktopData.map((data) => {
            return (
              <div
                style={{ paddingTop: `${data.topPading}` }}
                className="py-2"
                key={data.id}
              >
                <h1
                  style={{
                    fontSize: `${data.fontsize}`,
                    fontWeight: `${data.fontWeight}`,
                    color: `${data.fontColor}`,
                  }}
                >
                  {data.item}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Font</h2>
        <ul className="list-disc list-inside">
          <li className="py-2">
         All applications and services on the DIGIT platform must use the 

          <a href="https://fonts.google.com/specimen/Roboto+Condensed" target="_blank" rel="noreferrer"   className="text-border xl:text-base md:text-sm sm:text-xs  items-center" >  Roboto Condensed </a>
            and <a  href="https://fonts.google.com/specimen/Roboto"       className="text-border xl:text-base md:text-sm sm:text-xs  items-center" target="_blank">Roboto font.</a> 
          </li>
          <li className="py-2">
            {" "}
            Alternate typefaces like Helvetica or Arial for applications
            available on different domains.
          </li>
        </ul>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Headings</h2>
        <ul className="list-disc list-inside">
          <li className="py-2">
            All headings should follow the sentence case.
          </li>
          <li className="py-2">
            Heading tags like {"<h1> or <h2>"} should be used wherever
            applicable to create the heading tags on the page.Use specific
            heading style classes to provide the users with a consistent visual
            hierarchy{" "}
          </li>
          <li className="py-2">
            Use the heading with a caption above to indicate that the listed
            heading is part of a specific group.
          </li>
        </ul>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Paragraphs</h2>
        <ul className="list-disc list-inside">
          <li className="py-2">
            Apply the default font size for paragraphs as 16px for small screens
            and 19px for large screens.
          </li>
          <li className="py-2">Use 24px font size for lead paragraphs.</li>
        </ul>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Links</h2>
        <ul className="list-disc list-inside">
          <li className="py-2">
            Make use of lists to provide users with specific information and
            details in context.
          </li>
        </ul>
      </div>

      {/* New Card Component start here */}

      {/* <Header>All Card Component is here</Header>
      <div className="pb-4">
        <Card>
          <CardHeader>Card Header</CardHeader>
          <CardText>Card Text</CardText>
          <CardLabelDesc>Card Label Desc</CardLabelDesc>
          <CardCaption>Card Caption</CardCaption>
          <CardLabelError>Card Label Error</CardLabelError>
          <CardLabel>Card Label</CardLabel>
          <CardSectionHeader>Card Section Header</CardSectionHeader>
          <CardTextButton>Card Text Button</CardTextButton>
          <CardSubHeader>Card sub Header</CardSubHeader>
          <InputCard>Input Card</InputCard>
        </Card>
      </div>
      <div className="pb-4">
        <Header>Link Label</Header>
        <LinkLabel>This is Link Label</LinkLabel>
      </div>
      <div className="pb-4">
        <Header>MultiLink</Header>
        <MultiLink
          className="multilinkWrapper"
          displayOptions={showOptions}
          options={dowloadOptions}
        />
      </div> */}
    </div>
  );
};

export default Typography;
