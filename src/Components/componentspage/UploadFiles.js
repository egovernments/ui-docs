import {
  Card,
  Header,
  UploadFile,
  UploadImages,
} from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import FileUpload1Img from "../../assets/img/all_fresh/FileUpload1.png"
import FileUpload2Img from "../../assets/img/all_fresh/FileUpload2.png"

const UploadFiles = () => {
  const [file, setFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const isMobile = window.innerWidth < 768;
  function selectfile(e) {
    setFile(e.target.files[0]);
  }
  function getImage(e) {
    setImageFile(e.target.files[0]);
  }
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header>File Upload</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          The File Uploader component allows users to select and upload files on the application
          screens.
        </p>
      </div>
        <Card className="mb-8">
          <img src={FileUpload1Img} alt="File Upload" className="w-1/2" />
          <img src={FileUpload2Img} alt="File Upload" className="w-1/2 mt-8" />
        </Card>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
        You should only ask users to upload something if it's mandatory for the delivery of service.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          How to Apply
        </h3>
        <ul className="list-outside list-disc pl-4">
          <li className="py-2">
            Use standardized DIGIT specific text to describe the user action like "Upload Files"</li>
          <li className="py-2">Provide information on the applicable file types and maximum file size that can be
            uploaded</li>
          <li className="py-2">Show error messages consistent with DIGIT design style standards</li>
        </ul>
      </div>
    </div>
  );
};

export default UploadFiles;
