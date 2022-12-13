import {
  Card,
  CheckBox,
  Header,
} from "@egovernments/digit-ui-react-components";
import React from "react";
import CheckboxImg from "../../assets/img/all_fresh/Checkbox.png";

const isMobile = window.innerWidth < 768;
const Checkbox = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="pb-2">
        <Header>Checkbox</Header>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          Overview
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          Checkboxes component allow users to select one or multiple options
          from a given set of choices. DIGIT follows a standard design model
          across screens to ensure visual consistency.
        </p>
      </div>
      <Card className="py-8">
        <img src={CheckboxImg} alt="checkbox" className="h-10 w-25" />
      </Card>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          This component should be used only when users need to select multiple
          options from a list of given choices or toggle an option.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When not to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          This component should not be used in cases where the user has to
          select only one option from the given choices. For single option
          selection, use radio buttons.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          How to Apply
        </h3>
        <ul className="list-outside list-disc pl-4">
          <li className="py-2">
            Position checkboxes to the left of the text labels
          </li>
          <li className="py-2">
            {" "}
            Add hint text to tells the users how many options they can select{" "}
          </li>
          <li className="py-2">
            Do not add any pre-selected default options as this may confuse
            users
          </li>
          <li className="py-2">
            Sort the options in alphabetical order for clarity - in some cases,
            the list may be sorted on the most preferred to least preferred
            options{" "}
          </li>
          <li className="py-2">
            Add suitable page headers if only one question is asked per page -
            in case of multiple questions per page headers are not required{" "}
          </li>
          <li className="py-2">
            Add additional information as hints for the given options if
            required
          </li>
          <li className="py-2">
            Add a none option at the end, if required, in case the given options
            do not apply for some users
          </li>
          <li className="py-2">
            Keep the questions simple and options relevant to the questions
            asked
          </li>
          <li className="py-2">Use standard-sized checkboxes in general</li>
          <li className="py-2">
            Use smaller sized checkboxes in certain places where we do not want
            to distract users from the main content on the page{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Checkbox;
