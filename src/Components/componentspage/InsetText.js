import { Card, Header, InfoBanner } from '@egovernments/digit-ui-react-components'
import React from 'react'
import InsetTextImg from "../../assets/img/all_fresh/InsetText.png"

const InsetText = () => {
    return (
        <div className="md:w-5/6 w-full mb-60">
            <div className="pb-2">
                <Header>Inset Text</Header>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Inset Text component is used to communicate some important details to the users. It
                    contains a block of text and helps in drawing user attention to important messages, quotes,
                    notifications or directives.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4">
                    <img src={InsetTextImg} alt="Inset Text" />
                </Card>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Guidelines</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The component design guidelines below provide information on how to use inset text
                    within DIGIT modules and screens.
                </p>
            </div>
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
