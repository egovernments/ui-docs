import { Card, Header, SectionalDropdown } from '@egovernments/digit-ui-react-components'
import React from 'react'
import Select1Img from "../../assets/img/all_fresh/Select1.png"
import Select2Img from "../../assets/img/all_fresh/Select2.png"

const isMobile = window.innerWidth < 768;
const Select = () => {
    const cityData = [{heading:"head 1",options:[{city:"a"}]},{heading:"head 2",options:[{city:"b"}]}]
    const onSelectEmployee = () => {
        console.log("Hello");
      };
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Select</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Select component provides the users with the option to choose the relevant input from
                    the list of available options. This component is mostly used in user input forms and collect
                    vital information.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4">
                    <img src={Select1Img} alt="select1" className="w-1/2" />
                    <br />
                    <img src={Select2Img} alt="Select2" className="w-1/2" />
                </Card>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use the Select component sparingly since users do not find it very convenient.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                        Use this component when users need to select one option from a long list of choices.
                        Make sure the users have the hint that only one option must be selected.
                    </li>

                    <li className="py-2">If possible, limit the choices to make it easier for users to select an option. </li>

                    <li className="py-2">Use radio buttons wherever applicable since users find it more convenient. </li>
                </ul>
            </div>
        </div>
    )
}

export default Select
