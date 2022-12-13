import React, { useState } from "react";
import {
  Card,
  FormComposer,
  Header,
  Label,
  TextInput,
} from "@egovernments/digit-ui-react-components";
import TextInputImg from "../../assets/img/all_fresh/TextInput.png"
import PasswordImg from "../../assets/img/all_fresh/Password.png"
import SuffixPrefixImg from "../../assets/img/all_fresh/SuffixPrefix.png"
import PreFixImg from "../../assets/img/all_fresh/PreFix.png"
import SufixImg from "../../assets/img/all_fresh/Sufix.png"
import TextInputErrorImg from "../../assets/img/all_fresh/TextInputError.png"


const TextInputs = () => {
  const [inputName, setInputName] = useState("");
  const [number, setNumber] = useState(false);
  const isMobile = window.innerWidth < 768;
  const [errorCode, setErrorCode] = useState(false);
  const handleChange = (e) => {
    setInputName(e.target.value); 
  };
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header>Text Input</Header>
      </div>
      <div className="content_main">
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            Overview
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Text Input enables users to interact with the application through
            content input and data. The component allows users to input
            responses or data based on specific requirements.
          </p>
        </div>
        <Card className="py-4">
          <img src={TextInputImg} alt="Input Text" className="w-1/2" />
        </Card>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            When to Apply
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Use this Text Input component to enable users to enter short single
            text content only. This includes capturing the user Phone Number or
            Name.
          </p>
        </div>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            When not to Apply
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Do not use this component for multiple text line input. If the
            inputs span multiple lines use the Text Area component.
          </p>
        </div>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            How to Apply
          </h3>
          <ul className="list-outside list-disc pl-4">
            <li className="py-2">
              Input labels must be available to users on the interface to
              provide space for text input.
            </li>
            <li className="py-2">
              {" "}
              Make sure the labels are positioned right above the text input
              box.
            </li>
            <li className="py-2">
              The label text must be precise and simple enough to ensure users
              understand what is required as text input.
            </li>
            <li className="py-2">Do not use colons or dashes at the end of the label text.</li>
            <li className="py-2">
              Provide a page heading label to indicate what kind of input is
              required from the users on the given page.{" "}
            </li>
            <li className="py-2">
              Make sure the text input component aligns with the DIGIT brand
              using the correct design styles
            </li>
          </ul>
        </div>
        <div className="sm:w-3/5 w-full py-4">
          <h2 className="2xl:text-3xl xl:text-3xl md:text-2xl sm:text-lg font-bold pb-4">
            Text Input Types
          </h2>
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            Hint text
          </h3>
        </div>
        <Card className="py-4">
          <img src={PasswordImg} alt="password" className="w-1/2"  />
        </Card>
        <div className="py-4">
          <p className="2xl:text-lg sm:text-sm">
            Use hint text to give information to users on the kind of input
            required and why should the user provide it. Make sure the help text
            does not contain links or long sentences. Simple, concise and clear
            hint text deliver the right message to users.
          </p>
        </div>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
            Prefix and Suffix
          </h3>
          <p className="2xl:text-lg sm:text-sm">
            Prefixes and suffixes can be used as symbols to indicate the type of
            input required from users. For instance, the rupee prefix tells
            users to enter any amount or the measurement in kg suffix tells
            users to enter the specified weight or quantity details.
          </p>
        </div>
        <Card
          className="py-4"
        >
          <img src={PreFixImg} alt="suffix prefix" className="w-1/2" />
          <img src={SufixImg} alt="suffix prefix" className="w-1/2 mt-4" />
        </Card>
        <div className="sm:w-3/5 w-full py-4">
          <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          Error Messages
          </h3>
        </div>
        <Card
          className="py-4 cursor-pointer"
          onClick={() => setErrorCode(!errorCode)}
        >
        <img src={TextInputErrorImg} alt="Error Message" className="w-1/2" />
          </Card>
        <div className="sm:w-3/5 w-full py-4">
          <p className="2xl:text-lg sm:text-sm pb-4">
          Follow the text input specifications given below for showing error messages on the screen.
          </p>
          <p className="2xl:text-lg sm:text-sm">Use the error message list below for specific error messages, styles, and formats.</p>
        </div>
      </div>
    </div>
  );
};

export default TextInputs;
