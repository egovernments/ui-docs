import { Card, Header, LinkButton } from '@egovernments/digit-ui-react-components'
import React from 'react'
import SkipLinkImg from "../../assets/img/all_fresh/SkipLink.png";

const isMobile = window.innerWidth < 768;
const SkipLink = () => {
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Skip Link</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Skip Link component allows users to navigate back to the home page or the main
                    content page in one click. This component assists user navigation making it easier for
                    users to avoid irrelevant navigation across pages.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4">
                <img src={SkipLinkImg} alt="skip link" className="h-5 w-50" />
                </Card>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    All pages on the DIGIT application screens must provide the Skip Link component in the
                    header section.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                        This component is visible only when activated by a keyboard press.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SkipLink
