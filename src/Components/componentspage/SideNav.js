import { Card, Header } from '@egovernments/digit-ui-react-components'
import React from 'react'
import SideNavImg from "../../assets/img/all_fresh/SideNav.png"
import SideNavImgA from "../../assets/img/all_fresh/SideNavA.png"
import SideNavImgB from "../../assets/img/all_fresh/SideNavB.png"

const isMobile = window.innerWidth < 768;
const SideNav = () => {
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Side Nav</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Side Nav component provides users with access to the system menu and navigation options. It can be used for single or multiple levels of navigation.
                </p>
            </div>
            <Card className="py-4">
            <div className="flex items-center">
                <img style={{height:"46vw"}}  src={SideNavImg}  alt="Side Nav" className="w-10 " />
                <img style={{height:"46vw"}} src={SideNavImgA}  alt="Side NavA" className="w-45 ml-20"/>
                <img style={{height:"46vw"}} src={SideNavImgB}  alt="Side NavB" className="w-45 ml-20"/>
                </div>
            </Card>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    The Side Nav component on the DIGIT UI screens appears on the left side.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">This component is visible at all times to allow easy navigation access to users.</li>
                    <li className="py-2">Make use of single or multiple levels of menu options to guide users across the application.</li>
                    <li className="py-2">The icons on the side nav should be reflective of the menu options and not just merely used for decoration.</li>
                    <li className="py-2">Ensure the width of the side nav is enough to cover the menu text without making it appear too condensed</li>
                    <li className="py-2">Apply the sentence case (first letter capitalized) rule across the side nav.</li>
                    <li className="py-2">Use icons only for the first level hierarchy items.</li>
                    <li className="py-2">Avoid deep nesting for menu lists.</li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
