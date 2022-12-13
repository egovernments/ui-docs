import { Card, Header } from '@egovernments/digit-ui-react-components'
import React from 'react'
import TagImg from "../../assets/img/all_fresh/Tag.png"

const isMobile = window.innerWidth < 768;
const Tag = () => {
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Tag</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Tag component is used to display the status of specific user actions.
                </p>
            </div>
            
            <div className="pb-4">
                <Card className="py-4">
                    <img src={TagImg} alt="tag" className="w-1/2" />
                </Card>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                   Use tags to provide users with specific information on a data component or action.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                   Do not use tags as hyperlinks to redirect users to another section or page
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                       The tag component should use adjectives as labels instead of verbs. 
                    </li>
                    <li className="py-2">Use coloured tags to make it easier for users to distinguish present status or information in context. </li>

                    <li className="py-2">Make sure the use of colours is consistent across to avoid confusing users. Too many colours can also 
                    lose their relevance besides creating visual clutter</li>

                    <li className="py-2">Limit the number of tags in case of multiple status displays. Add only ones that are absolutely required.</li>

                    <li className="py-2">Remember, short tags are easier to scan and interpret.</li>
                </ul>
            </div>
        </div>
    )
}

export default Tag
