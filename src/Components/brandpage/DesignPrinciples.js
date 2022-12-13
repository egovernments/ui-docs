import React from 'react';
import { Header } from "@egovernments/digit-ui-react-components";

const isMobile = window.innerWidth < 768;
const DesignPrinciples = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header className="sm:text-3xl font-bold">Design Principles</Header>
      </div>
      <h1 className="sm:text-2xl font-bold">The Objectives</h1>
      <p >Design principles define the way visual elements are used so that the users find it easy to interpret, navigate, and use the application interface. User requirements translate the key dynamics that shape the principles of UI design. It provides answers to key questions like
      </p>  
        <br />
      <ol>
        <li> 1. How can I make it easier for users to perform the actions? </li>
        <li> 2. How do I avoid frustrating users with irrelevant information? </li>
        <li> 3. How do I ensure the user experience is smooth and pleasant? </li>
      </ol>
        <br />
      <p>
        Effective design is one where the UI is invisible. Users are not distracted by irrelevant objects or information. 
      </p>
      <br />

       <h1 className="sm:text-2xl font-bold">DIGIT Design Objective</h1>
       
       <p>"Keep it Simple" is the central theme guiding the DIGIT platform design principles. Simplicity that helps users navigate through the screens without any doubts or hassle.</p>
      
        <br/>
       <h1 className="sm:text-2xl font-bold">DIGIT Design Principles </h1>
        
      <ul className="list-outside list-disc pl-4">
        <li className='py-2'><h2 className='sm:text-xl font-bold'>User-centric</h2> Does your application design meet your target user expectations? A basic question defining UI design standards. If we do not understand our user needs, our design will never carve a pleasant user experience. And, this understanding should not be based on mere assumptions. Our design standards apply established research data and best practice tenets to provide a seamless user experience.
       </li >
        <li className='py-2'> <h2 className='sm:text-xl font-bold'>Reusable</h2> It is all about creating a meaningful, engaging, and satisfying user experience. Each component is reusable across modules which makes it easier to replicate. DIGIT design usability standards outline the requirements of digital service portal users. </li>
        <li className='py-2'><h2 className='sm:text-xl font-bold'> Accessible </h2>Accessibility reflects how easy it is for different types of users to use your application. Is the design inclusive enough to accommodate non-tech savvy users or users with certain disabilities? Answers to these questions can promote your application adoption statistics. DIGIT design system applies the well-researched W3C standards to its interface design principles. Some of the basic accessibility standards applied in DIGIT include -
        <br />
        <br />
        i. Grouped sections - Screen content is grouped in a way that ensures the linkages between sections are clear to users. The platform UI applies distinct heading styles and predictive text labels for clarity.<br />
        ii. Meaningful labels - Short descriptive labels are used across forms and action fields to assist users and help them understand the purpose of the field. <br />
        iii. Visual cues - The text colour on the foreground applies an adequate contrast ratio to the background colour to improve readability. <br />
        iv. Interaction cues - The interactive elements on the screen make use of visible cues to identify the existing link states and indicate required user action. For instance, a link is highlighted in a different colour on mouseover. <br />
        v. Navigation cues - Application navigation links follow a consistent style and naming convention on DIGIT screens. Clear headings and the use of breadcrumbs make sure users can switch screens easily. <br />
        vi. Help cues - Use of question mark symbols adjacent to required fields routes the users to the contextual help text that opens as a small popup window. <br /><br />
        </li>
        <li className='py-2'><h2 className='sm:text-xl font-bold'>Mobile-First</h2> DIGIT design cues apply the mobile-first approach to ensure increased user participation and adoption by all stakeholders. The following design principles define our focus on delivering a seamless UI experience to users across devices.
        <br/><br/>
        i. Intuitive navigation - The interface design follows the rules of simplicity, consistency and clarity in the use of text, label and interactive elements. The use of visual cards and cues makes it easier for users to find their way around.<br />
        ii. Content easy - The application interface use short, simple and easy to understand content labels to avoid visual clutter. Important bits of text are highlighted and appear on top to ensure users do not miss out on relevant details.<br />
        iii. Single input screens - Each screen fetches or provides a single input detail only. The page header provides a clear indication of the input or information type displayed on that page. This ensures users know what is expected action on the specific screen.<br />
        iv. Responsive layouts - The screen layouts follow the responsive design approach to ensure an optimized experience across devices and gadgets used to access applications. <br /><br />
        </li>
        <li><h2 className='sm:text-xl font-bold'>Localization</h2> Our interface is tuned to match the localized requirements of our users. The app screens, information, headers, notifications, and tracking details can be easily integrated with local language needs. Below are the key design principles that support our localization needs.<br/><br/>
        i. Dynamic layouts - The DIGIT application screens use dynamic layouts that ensure optimized space for the display of content in local languages. <br />
        ii.Localized fonts - The interface supports specific fonts that ensure seamless visibility of content in various languages.<br/><br/>
        </li>
        <li><h2 className='sm:text-xl font-bold'>Data-Driven Design </h2> Our design principles are based on user experience data and research insights. Service prototypes go through stages of testing. Analytical insights help us identify user pain points and reimagine the interface design for improved adoption. This iterative process highlights the limitations of existing interface designs. 
        </li><br/>
        <li><h2 className='sm:text-xl font-bold'>Low Bandwidth Scenarios</h2>Finally, we understand the frustration of slow-loading apps. With more users accessing applications on their mobile phones on the move, bandwidth issues assume a key priority in defining usability and engagement. Our design principles cater to low bandwidth users that ensure a seamless user experience even when the internet speed is not so good. Design practices like optimized images and the addition of lite versions of apps minimize response times.
        </li><br/>
        <li>
          <h2 className='sm:text-xl font-bold'>Open Source</h2>Free to adapt, apply, and reuse. We believe in sharing best practices with the community to promote clean and effective application designs. 
        </li>
      </ul>
        <br />
      <br />
    </div>
  );
};

export default DesignPrinciples;
