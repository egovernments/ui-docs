import { Card, Header, SubmitBar } from '@egovernments/digit-ui-react-components'
import React from 'react'
import PanelSuccessImg from "../../assets/img/all_fresh/PanelSuccess.png"
import PanelErrorImg from "../../assets/img/all_fresh/PanelError.png"
const isMobile = window.innerWidth < 768;
const Panel = () => {
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Panel</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Panel component is used as placeholders to display confirmation on specific user
                    actions completed successfully. The text and information in the panel provide the users
                    with the content on specific status and details on the completed actions.
                </p>
            </div>
            <Card className="py-4">
                <div className="flex items-center">
                    <img src={PanelSuccessImg} alt="Panel Success" className="w-1/2" />
                    <img src={PanelErrorImg} alt="Panel Error" className="w-1/2 ml-2" />
                </div>
            </Card>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use the Panel component to display the completed action status message and
                    acknowledge with specific transaction details.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">  Do not use the Panel component to display any other important information. </p>

                <p className="2xl:text-lg sm:text-sm"> Do not combine other messages along with the main content of the panel. This might leave
                    a confusing message to the users. </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                        Apply the design specifications provided here for the listed component.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Panel
