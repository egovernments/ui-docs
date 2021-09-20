import React from "react";
// import { Body, TopBar } from "@egovernments/digit-ui-react-components"
import {
  AnnouncementIcon,
  ReceiptIcon,
  ArrowLeft,
  ArrowDown,
  DownloadIcon,
  Ellipsis,
  SearchIconSvg,
  Header,
} from "@egovernments/digit-ui-react-components";

const Iconography = () => {
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="pb-2">
        <Header>Iconography</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Icons in the DIGIT act as visual aids to help merchants complete
          tasks. They’re simple, informative, and build on the visual language
          of the design system.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="py-2">
          <div className="grid grid-cols-10">
            <AnnouncementIcon />
            <ReceiptIcon />
            <ArrowLeft />
            <ArrowDown />
            <DownloadIcon />
            <Ellipsis />
          </div>
        </div>
        <div className="grid grid-cols-10">
          <SearchIconSvg />
        </div>
      </div>
    </div>
  );
};

export default Iconography;
