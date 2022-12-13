import { Card, Header, InfoBanner } from '@egovernments/digit-ui-react-components'
import React from 'react'
import InsetTextImg from "../../assets/img/all_fresh/InsetText.png"
import InsetTextImgOne from "../../assets/img/all_fresh/InsetTextOne.png"

const isMobile = window.innerWidth < 768;
const InsetText = () => {
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Inset Text</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Inset Text component is used to communicate some important details to the users. It
                    contains a block of text and helps in drawing user attention to important messages, quotes,
                    notifications or directives.
                </p>
            </div>
            {/* <div className="pb-4 flex ">
                <Card className="py-4">
                    <img src={InsetTextImg} alt="Inset Text" className="w-1/2" />
                    <img src={InsetTextImgOne} alt="Inset Text" className="w-1/2" />
                </Card>
            </div> */}
            <Card>
            <div className="pb-4 flex space-x-4">
                    <img src={InsetTextImg} alt="Inset Text" className="w-1/2" />
                    <img src={InsetTextImgOne} alt="Inset Text" className="w-1/2" />
            </div>
            </Card>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use this component only when you want to draw the user attention to specific details or
                    information. The component helps in differentiating the block of content from other
                    information visible on the page.
                </p>

                <p className="2xl:text-lg sm:text-sm"> Use this component for giving examples, highlighting quotes, or providing any additional
                    information to the user.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">  Do not use this component in a screen that has other prominent visual elements or that
                    contains too much information. This can confuse users on what to read and what is not
                    important. </p>

                <p className="2xl:text-lg sm:text-sm">  Do not use inset text to highlight every bit of information or text on the screen. This way the
                    component will lose its significance.</p>

                <p className="2xl:text-lg sm:text-sm"> Use the Warning Text component to highlight legal disclaimers or information.</p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                        Do not overuse this component across the screens and applications.
                    </li>
                    <li className="py-2">    Position the component where it is relevant and required. </li>
                </ul>
            </div>
        </div>
    )
}

export default InsetText
