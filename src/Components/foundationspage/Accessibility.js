import React from 'react';
import { Header } from "@egovernments/digit-ui-react-components";
import levelOfImportanceImg from '../../assets/img/foundations/accessibility/accessibilityimg1.png'
import Table from './Table'
import doImg from '../../assets/img/foundations/accessibility/Do.png'
import dontImg from '../../assets/img/foundations/accessibility/Dont.png'
import formImg from '../../assets/img/foundations/accessibility/form.png'
import labelOneImg from '../../assets/img/foundations/accessibility/labelOne.png'
import labelTwoImg from '../../assets/img/foundations/accessibility/labelTwo.png'
import labelThreeImg from '../../assets/img/foundations/accessibility/labelThree.png'
import labelFourImg from '../../assets/img/foundations/accessibility/labelFour.png'
import doOneImg from '../../assets/img/foundations/accessibility/DoOne.png'
import dontOneImg from '../../assets/img/foundations/accessibility/DontOne.png'
import doTwoImg from '../../assets/img/foundations/accessibility/DoTwo.png'
import dontTwoImg from '../../assets/img/foundations/accessibility/DontTwo.png'
import groupImg from '../../assets/img/foundations/accessibility/group.png'

const isMobile = window.innerWidth < 768;
const Accessibility = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header className="sm:text-3xl font-bold">Accessibility</Header>
        <div>
          <h1 className="sm:text-2xl font-bold">Overview</h1>
          <p>
              Accessible design lets people of all abilities interact with, understand, and navigate our products.
              <br /> <br />
              Products and web properties need to be accessible to everyone, including those with vision, hearing, cognitive, or motor impairments.
              <br /> <br />
              Accessible design is everyone's responsibility, from information and user experience design, through to development, and on into help and support. It is about understanding the users' journeys and proactively anticipating their needs.
              <br /> <br />
              To make sure products are accessible to everyone, follow the <a href='https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head' target="_blank" rel="noreferrer" className='text-red-400'>four principles of the Web Content Accessibility Guidelines:</a>
              <br /> <br />
              Perceivable: It can be perceived by at least one of a person's senses.
              <br /> <br />
              Operable: All interactions are operable through a variation of input methods.
              <br /> <br />
              Understandable: Information and operation of the interface must be understandable. 
              <br /> <br />
              Robust: Content can be interpreted by a variety of assistive technologies and withstand changes in these technologies.
              <br /> <br />
          </p>
        </div>

        <div>
          <h1 className="sm:text-2xl font-bold">Structure and Hierarchy</h1>

          <p>Consistent, clear hierarchy helps people who navigate the page using links or headers. Use headings 
          <br />
          and titles to outline the page so people can see the structure and how sections relate to each other.
          <br /><br/>
          Be predictable with structure and use patterns and layouts familiar to people.
          <br /><br/>
          Content should be visible, so avoid putting important information inside accordions.
          <br /><br/>
          </p>

        </div>

        <div>
          <h3 className="sm:text-lg font-bold">List by level of importance</h3>
          <img className='mt-4 h-96' src={levelOfImportanceImg} alt="heirarchy" />
          <br />
          <p>Place items on the page in order of their level of importance so people don't have to search for them.
          </p>
          <br /> <br />

          <h3 className="sm:text-lg font-bold">Having a consistent hierarchy</h3>
          <br />
          <p>Create and maintain a consistent hierarchy so that people can use alternative input methods to move through the page. Headings are in order without skipping levels.
          </p><br />
          <div className='grid grid-flow-row grid-cols-2 gap-8'>
              <img src={doImg} alt="do"/>
              <img src={dontImg} alt="dont"/>
          </div><br/><br/>

          <h3 className="sm:text-lg font-bold">Text Scaling</h3><br/>
          <p>Test the UI to ensure the layout works for different languages and assistive technologies. Consider languages that require longer text fields and text wrapping. Also consider how the UI looks at 200% magnification.
          </p><br/><br/>

          <h3 className="sm:text-lg font-bold">Group similar items</h3><br/>
          <p>Group items under titles or headings that clearly communicate the content of the group. 
          </p><br/><br/>

          <h3 className="sm:text-lg font-bold">Keyboard navigation</h3><br/>
          <p>
            Some people can't use a mouse and navigate through applications using tools such as a keyboard, mouth wand, or eye tracking system. People should be able to navigate and use the product with a keyboard or screen reader. Make sure anything that can be seen by hovering with a mouse is also accessible to keyboard focus and screen readers.
            <br/><br/>
            When creating an application, check if a keyboard can be used to:
            <br/><br/>
            <ul className="list-outside list-disc pl-4">
            <li>navigate</li>
            <li>perform the same tasks as people who use a mouse</li>
            <li>locate where you are on the page</li>
            <li>tell where the keyboard focus is</li><br/>
            </ul>

          </p>


          <h3 className="sm:text-lg font-bold">Manage Focus</h3><br/>
          <p>Keyboard focus follows the page as the eye would scan it. Focus travels top to bottom, left to right, moving from most to least important item. People can navigate applications using alternative input methods (D-pads, trackballs, keyboards, and navigation gestures), and the focus flows in a logical order.<br/><br/>
          When assessing keyboard focus:

          Be conscious of the order of elements on the page. Do they make sense from the user's perspective?
          <br/><br/>
          Indicate where focus is.
          <br/><br/>
          Avoid using input focus to select, trigger events, or display messages. People may need to navigate through all controls before making changes.
          <br/><br/>
          Keep in mind where the focus moves when the element in focus disappears. People should return to wherever they were before they focused on the element.
          <br/><br/> 
          </p><br/><br/>

           <h3 className="sm:text-lg font-bold">Use tooltips</h3><br/>
          <p>Tooltips can be activated by keyboard. When an element gets keyboard focus, a tooltip displays. When that element loses focus, the tooltip disappears. 
          </p><br/><br/>

          <h3 className="sm:text-lg font-bold">Validate forms online</h3><br/>
          <p>Validate forms inline so keyboard users don't have to navigate far to get feedback.
          <br/> <br/>
          Ideally, design interactions to prevent errors happening in the first place and help people fix problems as they occur.
          </p><br/><br/>
          <img className='h-40' src={formImg} alt="form"/><br/><br/>

          <h3 className="sm:text-lg font-bold">Meaningful text</h3><br/>
          <p>Consistent and helpful text makes the user interface accessible to people who use a screen reader. Screen readers help people with visual impairments by reading both visible and non-visible alternative text aloud.
          <br/><br/>
          All text should support accessibility, whether it's visible (UI labels, headings, buttons, forms, hyperlinks, and help text) or non-visible (alternative text for images and buttons).
          </p><br/><br/>

          <h3 className="sm:text-lg font-bold">Be concise and use plain English</h3><br/>
          <p>Keep content and accessibility text concise. People using screen readers hear every UI element read aloud, so the shorter the text, the faster they can navigate the content.
          <br/><br/>
          Screen readers can skim more easily and skip irrelevant paragraphs if you keep sentences short and frontload paragraphs with important information.
          <br/><br/>
          Plain English helps people skim and digest information faster. It also makes content more accessible to those who speak English as a second, third, or fourth language. 
          <br/><br/>
          Avoid idioms and always expand acronyms when using them for the first time.
          </p><br/><br/>
          
          <h3 className="sm:text-lg font-bold">Use consistent labels</h3><br/>
          <p>Keep content and accessibility text concise. People using screen readers hear every UI element read aloud, so the shorter the text, the faster they can navigate the content.
          <br/><br/>
          Screen readers can skim more easily and skip irrelevant paragraphs if you keep sentences short and frontload paragraphs with important information.
          <br/><br/>
          Plain English helps people skim and digest information faster. It also makes content more accessible to those who speak English as a second, third, or fourth language. 
          <br/><br/>
          Avoid idioms and always expand acronyms when using them for the first time.
          </p><br/><br/>
          
          <div className='grid grid-rows-2 grid-flow-col gap-2'>
            <img className='w-2/3' src={labelOneImg} alt="label"/>
            <img className='w-2/3' src={labelThreeImg} alt="label"/>
            <img className='w-2/3 -ml-32 ' src={labelTwoImg} alt="label"/>
            <img className='w-2/3 -ml-32' src={labelFourImg} alt="label"/>
          </div>
          <p className='-mt-48'>
            Consistently label elements and components that have the same functionality. When people encounter these elements in different contexts, they should be able to recognize and understand the function or actions of an element. For instance, a menu item that is labeled All sprints should open a page that is titled All sprints. A dialogue with the title Copy page has a button labeled Copy.
          </p><br/><br/>

          <h3 className="sm:text-lg font-bold">Describe what an element does</h3><br/>
          <p>Label elements with action verbs that indicate what happens when the element is selected.</p><br/>
          <div className='grid grid-rows-1 grid-flow-col gap-0'>
            <img className='w-2/3' src={doOneImg} alt="label"/>
            <img className='w-2/3 -ml-32' src={dontOneImg} alt="label"/>
          </div><br/>
          
          <h3 className="sm:text-lg font-bold">Buttons</h3><br/>
          <p>In buttons, describe what the action does and, if you can, reveal what will happen.</p><br/>
          <div className='grid grid-rows-1 grid-flow-col gap-0'>
            <img className='w-2/3' src={doTwoImg} alt="label"/>
            <img className='w-2/3 -ml-32' src={dontTwoImg} alt="label"/>
          </div><br/><br/>

          <h3 className="sm:text-lg font-bold">Hyperlinks and skip links</h3><br/>
          <p>Link text should indicate where the link navigates to. When linking text we use “Learn more” along with a description of where we are taking the user. Link your entire message. For in-app or in-product links don’t use a period (full stop) at the end of the sentence.
          <br/><br/>
          E.g. Learn more about Jira permissions 
          Linking the entire message gives users context about the link destination lowering their cognitive load.
          <br/><br/>
          These links take a user who is visually impaired through hearing a screen reader repeat “Learn more” at this time while tabbing through a page. Linking the full message also helps navigation using screen readers and allows the text to stand alone.
          <br/><br/>
          Add skip links or anchors to help people navigate around content pages.
          <br/><br/>
          </p><br/><br/>

          <h3 className="sm:text-2xl font-bold">Images and video</h3><br/>
          <p>
            For important information, use text rather than images. Only use images that usefully add to the text.
            <br/><br/>
            Describe non-text elements in the UI or with alternative text so screen readers can succinctly describe images and media.
            <br/><br/>
            Avoid moving or flashing images if possible.
            <br/><br/>
          </p><br/>

          <h3 className="sm:text-lg font-bold">Images that contain information</h3><br/>
          <p>
            If an image contains information that can only be understood by seeing the image, then you need to explain the content of the image using alternative text. Follow these guidelines when you write alt text:
            <br/><br/>
            The text should be an adequate replacement for both the content and the function of the image.
            <br/><br/>
            Determine the correct content and then deliver that message as succinctly as possible. Aim for no more than a few words, though sometimes a short sentence or two may be necessary.
            <br/><br/>
            Don't repeat information that is contained in the text found on the page around the image.
            <br/><br/>
            Don't use phrases like "image of ..." or "a photo of ..." to describe the image. This is apparent when using screen readers and the description itself should be enough to replace the meaning of the image.
            <br/><br/>
            If the meaning and content of an image is conveyed by surrounding text, header, or captions, then you might not need as much alternative text.
            <br/><br/>
          </p>

          <h3 className="sm:text-lg font-bold">Decorative images</h3><br/>
          <p>
            If the image is used strictly to make the page pleasant to the eye, doesn't contain a link, and isn't used to deliver information, then include the alt attribute, but leave it empty. For example, alt=""
          </p><br/><br/>

          <h3 className="sm:text-lg font-bold">Complex images</h3><br/>
          <p>
            A complex image could be a diagram, table or chart. Depending on the level of complexity, the image may need text near it explaining the contents, short alt text that complements this and possibly a link to a page with a long text description.
          </p><br/><br/>

          <h3 className="sm:text-lg font-bold">Videos</h3><br/>
          <p>
           Provide transcripts and in-sync captioning. Make sure users can control when the video or gif starts and stops.
          <br/><br/>
          Provide audio description for any text displayed in a video.
          </p><br/><br/>

          <h3 className="sm:text-2xl font-bold">Colors</h3><br/>
          <p>We comply with AA standard contrast ratios. To do this, we choose primary, secondary and extended colors that support usability. This ensures sufficient color contrast between elements so that people with low vision can see and use our products.</p><br/><br/>

          <h3 className="sm:text-lg font-bold">Include multiple visual cues</h3><br/>
          <p>Don't convey information using color alone. Use multiple visual cues, such as stroke weight, patterns, shape, text, or illustrations to ensure that everyone receives the same information. This helps people who are unable to, or have difficulty with, distinguishing one color from another. This includes people who are color blind, have low vision, or are blind.
          <br/><br/>
          For example, these inline validation messages use both color and icons to distinguish severity:</p><br/><br/>

          <h3 className="sm:text-lg font-bold">Use high contrast</h3><br/>
          <p>High color contrast helps people who are partially or completely color blind see differences between certain colors. It creates a strong visual hierarchy and improves usability for everyone. Make sure that the combination of text and background color do not fall below the WCAG recommended threshold ratio of 4.5:1 for standard text and 3:1 for larger text.
          <br/><br/>
          Decorative images and disabled states don't have contrast requirements.</p><br/>
          <img className='w-3/4' src={groupImg} alt="group" /><br/><br/>

          <h3 className="sm:text-2xl font-bold">Testing and research</h3><br/>
          <p>
            These guidelines will help improve accessibility in your applications, but they don't guarantee a fully accessible experience. We also recommend you:
          <br/><br/>
          Test the entire application and journeys using various assistive technologies and text scaling
          <br/><br/>

          Include people with impairments when testing
          <br/><br/>

          Ensure the tasks in your applications can be accomplished by anyone, regardless of ability
          <br/><br/>

         <a href="https://cdnbbsr.s3waas.gov.in/s3c92a10324374fac681719d63979d00fe/uploads/2022/12/2022120981.pdf" target="_blank" rel="noreferrer"   className="text-border xl:text-base md:text-sm sm:text-xs  items-center" > Indian Government Accessibility Guidelines  </a>
          <br/><br/>
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noreferrer"   className="text-border xl:text-base md:text-sm sm:text-xs flex items-center" > Web Content Accessibility Guidelines  </a>
          </p>

        </div>



        {/* <h1 className="sm:text-2xl font-bold ">Guideline 1.1</h1><br/> */}
        {/* <table className="border-separate border">
          <thead>
          <tr>
            <th>Success Criteria</th>
            <th>Recommendation</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Non Text Content</td>
              <td>
                <ul className="list-outside list-disc pl-4">
                    <li className='py-2 '>Images, form image buttons, and image map hot spots have appropriate, equivalent alternative text.</li>
                    <li className='py-2'>Images that do not convey content, are decorative, or contain content that is already conveyed in text are given empty alternative text (alt="") or implemented as CSS backgrounds. All linked images have descriptive alternative text.</li>
                    <li className='py-2'>Equivalent alternatives to complex images are provided in context or on a separate linked page.</li>
                    <li className='py-2'>Form buttons have a descriptive value.</li>
                    <li className='py-2'>Form inputs have associated text labels.</li>
                    <li className='py-2'>Embedded multimedia is identified via accessible text.</li>
                    <li className='py-2'>Frames and iframes are appropriately titled.</li>
                </ul>
              </td>
              </tr>
              <tr>
              <td>
                
                    <li className='py-2  h-6 w-7'><img src={tickImg} alt="tickImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={crossImg} alt="crossImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={crossImg} alt="crossImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={tickImg} alt="tickImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={crossImg} alt="crossImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={tickImg} alt="tickImg"/></li>
                    <li className='py-2  h-6 w-7'><img src={crossImg} alt="crossImg"/></li>
                
              </td>
            </tr>
          </tbody>
        </table>
         */}


         {/* <Table /> */}
      </div>
    </div>
  );
};

export default Accessibility;
