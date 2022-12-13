import { Card, Header } from '@egovernments/digit-ui-react-components'
import React from 'react'
import PopUpImg from "../../assets/img/all_fresh/PopUp.png"

const isMobile = window.innerWidth < 768;
const PopUp = () => {
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Pop Up</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Pop Up component opens up as a small dialogue box on the screen and is typically used to confirm a piece of action with the user. It can also be used to seek some information from the user before proceeding with the next steps.
                </p>
            </div>
                <Card className="card py-4">
                    <img src={PopUpImg} alt="popup" className="w-1/2" />
                </Card>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    The Pop Up component appears as an extra layer or object over the existing screen. Use this component to seek additional information or confirmation of some action from the user.  
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                   Do not overuse popups since it disrupts the normal flow for users.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                




                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">Add a brief title or header that gives an indication of the purpose of the popup window. </li>
                    <li className="py-2">Use simple and clear sentences in the popup description text to ensure easy understanding.</li>
                    <li className="py-2">Avoid adding too many points in a single popup as it might confuse users.</li>
                    <li className="py-2">Add clear action buttons that the user needs to click.</li>
                    <li className="py-2">Make the default button option clear so that users know which one to click in case of any doubt.</li>
                </ul>
            </div>
        </div>
    )
}

export default PopUp
