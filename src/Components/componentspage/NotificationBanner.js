import { Banner, Card, Header, InfoBanner } from '@egovernments/digit-ui-react-components'
import React from 'react'
import NotificationBannerImg from "../../assets/img/all_fresh/NotificationBanner.png"

const isMobile = window.innerWidth < 768;
const NotificationBanner = () => {
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Notification Banner</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Notification Banner component is used to provide key information for all users. The
                    objective of this component is to draw the user attention to vital information that may not
                    be specific to the page only but relevant to the application. For instance, there is scheduled
                    maintenance and the application may not function for a certain duration.
                </p>
            </div>
            <Card className="py-4">
                    <img src={NotificationBannerImg} alt="Notification Banner" className="h-15 w-70" />
            </Card>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use notification banner components to intimate users of specific problems that have an
                    impact on the application performance.
                </p>

                <p className="2xl:text-lg sm:text-sm">Use this component to inform users of approaching timelines or the outcome of specific
                    user actions. For example - the application is submitted. </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Do not use notification banners too frequently. This might dissolve the significance of the
                    component and users might miss the information conveyed through these banners.
                </p>

                <p className="2xl:text-lg sm:text-sm">Do not use notification banners to communicate input validation errors. Make use of Error
                    Message or Error Summary components for such messages.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                        Place the backlink component at the top of the page. This way users
                        do not have to scroll through the entire page to find the back
                        button making it easier to navigate back to the previous page.
                    </li>
                    <li className="py-2"> Place the notification banner on top before the page {"<H1>"}</li>

                    <li className="py-2"> Ensure that the banner width aligns with the page width.</li>

                    <li className="py-2"> Avoid placing more than 2 banners on the same page.</li>

                    <li className="py-2"> Avoid placing notification banners and error summaries on the same page. </li>
                </ul>
            </div>
        </div>
    )
}

export default NotificationBanner
