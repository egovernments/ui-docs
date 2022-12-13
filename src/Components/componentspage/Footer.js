import { Card, Header, NavBar } from '@egovernments/digit-ui-react-components'
import React from 'react'
import FooterImg from "../../assets/img/all_fresh/Footer.png"

const Footer = () => {
    const isMobile = window.innerWidth < 768;
    const menuItems =[
        {
            id : 1,
            heading : "city"
        }
    ]
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Footer</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Footer component appears on the bottom section of every screen on the DIGIT
                    application. It contains information related to application copyright, contact and privacy.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4">
                <img src={FooterImg} alt="footer" className="h-5 w-40" />
                </Card>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use this component at the bottom of each screen or page on the DIGIT application.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Make sure not to use this component along with breadcrumbs.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                        Add the contact details and links to the privacy statements in this component.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
