import { Card, Header, RadioButtons } from '@egovernments/digit-ui-react-components'
import React, { useState } from 'react'
import RadioImg from "../../assets/img/all_fresh/Radio.png"

const isMobile = window.innerWidth < 768;
const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState();
    const name = ['Radio']

    const handleSelect = (e) => {
        setSelectedOption(e)
    }
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Radio Buttons</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    Radio button components are used to enable users to select a single option from a list of
                    alternatives.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4">
                <img src={RadioImg} alt="radio" className="h-10 w-40" />
                </Card>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use this component when the users have to select only one option in the list.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Do not use this option for multiple option selection. Use checkboxes.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">The radio buttons should appear on the left of the text labels. </li>
                    <li className="py-2"> Make sure the users have the hint that only one option must be selected. </li>
                    <li className="py-2"> The radio buttons should not be pre-selected as default. The users might mistake the
                        selection as the right choice or miss the input completely.</li>
                    <li className="py-2"> Make the text labels self-explanatory so that users do not face issues understanding
                        the choices.</li>
                    <li className="py-2"> Add "None of the above" option or "Do not know" wherever applicable to make it easier
                        for users to select the options.</li>
                    <li className="py-2">  Make sure the users understand that they have to select some option to proceed.</li>
                    <li className="py-2"> Add the options in a logical order to make it simpler for users to understand the
                        choices.</li>
                    <li className="py-2"> Offer one question per screen to make it more user friendly.</li>
                </ul>
            </div>
        </div>
    )
}

export default RadioButton
