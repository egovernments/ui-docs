import {
  BackButton,
  ButtonSelector,
  Card,
  CustomButton,
  Header,
  LinkButton,
} from "@egovernments/digit-ui-react-components";
import React from "react";
import ButtonImg from "../../assets/img/all_fresh/Button.png"
import ButtonGroupImg from "../../assets/img/all_fresh/ButtonGroup.png"


const Buttons = () => {
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-4">
        <Header>Button</Header>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          Overview
        </h3>
        <p className="2xl:text-lg sm:text-sm">
          Buttons are used for specific user actions. These clickable UI
          components allow the users to interact with the system.
        </p>
      </div>
      <Card className="py-4">
        <img src={ButtonImg} alt="Button" />
      </Card>
      <div className="sm:w-3/5 w-full py-4">
        <h2 className="2xl:text-3xl xl:text-3xl md:text-2xl sm:text-lg font-bold">
          Guidelines
        </h2>
        <p className="2xl:text-lg sm:text-sm">
          The guidelines below specify how buttons should be designed and
          deployed on the DIGIT platform.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm pb-2">
          The button component in the DIGIT platform is typically used to
        </p>
        <ul className="list-outside list-disc pl-4">
          <li className="py-1"> submit forms</li>
          <li className="py-1">save information</li>
          <li className="py-1">initiate an action</li>
          <li className="py-1">trigger any element</li>
          <li className="py-1">specify the next step</li>
        </ul>
        <p className="pt-2 2xl:text-lg sm:text-sm">
          or action Use buttons to start or save user journeys across the
          platform
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          When not to Apply
        </h3>
        <p className="2xl:text-lg sm:text-sm py-2">
          Do not use the button component as links to external websites.
        </p>
        <p className="py-2">
          It is best practice to avoid multiple buttons on a single page.
        </p>
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
          How to Apply
        </h3>
        <ul className="list-outside list-disc pl-4">
          <li className="py-2">
            Use precise, simple, and instructive text in buttons for clarity.
            For instance, "Save and Continue", "Apply", "Save", "Download and
            Print", "Pay", "Register", "Confirm", "Login", "Accept" and so on.
          </li>
          <li className="py-2">Align buttons to the left side of the form page.</li>
          <li className="py-2">
            {" "}
            Ensure users do not click twice on the button to avoid repetitions
            and clogging the data flow.
          </li>
          <li className="py-2">
            Check our different Button Types for design specifications of each
            type
          </li>
        </ul>
      </div>
      <div className="py-4">
          <img src={ButtonGroupImg} alt="Button Group" />
      </div>
      <div className="sm:w-3/5 w-full py-4">
        <p className="py-4"><b> Default Buttons -</b> These buttons are used for the primary call to action item on the page. Make sure you include only one default button on a single page for clarity and efficacy.</p>
        <p className="py-4"><b>Start Buttons - </b> These buttons redirect users to the concerned application page and usually initiate a transaction or process.</p>
        <p className="py-4"><b>Secondary Buttons -</b> These buttons offer users the option to perform actions or sub-tasks that are part of the main action. Avoid multiple secondary buttons on a page to avoid user confusion. Make sure these buttons are added to simplify the user journey instead of complicating it. </p>
        <p className="py-4"><b>Secondary Buttons - </b> These buttons are used to trigger actions that cannot be easily undone. Hence, it is a good practice to add a confirmation message screen or warning text that is visible to the user once they click on the warning button. The action is performed only after the user confirms it.</p>
        <p className="py-4"> The warning buttons should be used only where required. Refer to the button design and colour specifications to ensure visual consistency across the platform</p>
        <p className="py-4"> <b> Disable Buttons - </b> Use these buttons only if required as they can confuse users.</p>
        <p className="py-4"><b> Grouping Buttons - </b> Align 2 or more buttons as groups to make it easier for users to understand the action alternatives available.</p>
      </div>
    </div>
  );
};

export default Buttons;
