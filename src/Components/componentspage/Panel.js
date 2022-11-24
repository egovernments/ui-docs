import { Card, Header, SubmitBar } from '@egovernments/digit-ui-react-components'
import React from 'react'
import PanelSuccessImg from "../../assets/img/components/PanelSuccess.png"
import PanelErrorImg from "../../assets/img/components/PanelError.png"

const Panel = () => {
    return (
        <div className="md:w-5/6 w-full mb-60">
            <div className="pb-2">
                <Header>Panel</Header>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Panel component is used as placeholders to display confirmation on specific user
                    actions completed successfully. The text and information in the panel provide the users
                    with the content on specific status and details on the completed actions.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4 flex items-center">
                    <div className="w-80 bg-panel_success flex justify-items-center items-center flex-col py-5">
                        <h2 className="text-3xl text-white font-bold">Success Message</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F47738" className="w-10 h-10 my-4 rounded-full">
                            <path d="M0 0h24v24H0z" fill="#fff" />
                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#00703C" />
                        </svg>
                        <p className="text-white text-lg">Reference No.</p>
                        <p className="text-white text-2xl">KA22922-28282</p>
                    </div>
                    <div className="w-80 bg-panel_error flex justify-items-center items-center flex-col py-5 ml-8">
                        <h2 className="text-3xl text-white font-bold">Failure Message</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d4351c" className="w-10 h-10 my-4 rounded-full">
                            <path d="M0 0h24v24H0V0z" fill="#fff" />
                            <circle cx="12" cy="19" r="2" />
                            <path d="M10 3h4v12h-4z" />
                        </svg>
                        <p className="text-white text-lg">Reference No.</p>
                        <p className="text-white text-2xl">KA22922-28282</p>
                    </div>
                </Card>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Guidelines</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The following guidelines provide details on how to use this component and the prescribed
                    design guidelines.
                </p>
            </div>
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
