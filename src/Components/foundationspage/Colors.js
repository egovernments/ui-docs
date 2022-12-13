import { Header } from "@egovernments/digit-ui-react-components";
import React from "react";
import colorsItem from "./ColorsItem";

const isMobile = window.innerWidth < 768;
const Colors = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "190%"} : {}}>
      <div className="pb-2">
        <Header>Colors</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          This page offers the DIGIT colour palette details. Make sure you
          adhere to the defined colour guidelines provided below.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Guidelines</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          The colour palette shared in this section should be used for all DIGIT
          UI elements. The colour themes and application standards are derived
          from well-researched heuristics to achieve balance and harmony in our
          platform interface design.
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          It is suggested that the following guidelines are met to ensure
          improved user experience
        </p>
        <ol className="list-decimal list-inside">
          <li className="md:text-xs lg:text-sm 2xl:text-base">
            Use of defined primary colours to maintain visual consistency
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base">
            Make sure you use the colour codes given below in the context that
            they have been defined for.{" "}
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base">
            Maintain the colour contrast ratio as per the pre-defined platform
            standards
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base">
            Stick to the colour palette to create engaging user interfaces
          </li>
        </ol>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Contrast Aspect</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Make sure that the contrast ratio of the text and other UI elements
          meet the specifications outlined in the Web Content Accessibility
          Guidelines (WCAG) 2.1.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Colour Aspect</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Use the DIGIT colour palette given below.
        </p>
        <p>{` Use the colour function reference <digit-colour> to fetch the specified colour from the palette directly. For instance, use the code <digit-colour-green> .`}</p>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {colorsItem.map((data) => {
          return (
            <div className="p-4 flex flex-col h-32" style={{background: `${data.bgstyle}`}} key={data.id}>
              <p className="text-white text-sm pr-8" style={{color: `${data.colorStyle}`}}>
                {data.para}
              </p>
              <p className="text-white text-sm mt-auto" style={{color: `${data.colorStyle}`}}>{data.bgstyle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
