import { Card, Header, RemoveableTag } from '@egovernments/digit-ui-react-components'
import React from 'react'
import TagImg from "../../assets/img/components/Tag.png"

const Tag = () => {
    return (
        <div className="md:w-5/6 w-full mb-60">
            <div className="pb-2">
                <Header>Tag</Header>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Tag component is used to display the status of specific user actions.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4">
                    <div className="flex">
                        <span className="tagInactive">Inactive</span>
                        <span className="tagActive ml-8">Active</span>
                    </div>
                </Card>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Guidelines</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    Use the component design guideline below to ensure visual consistency across the
                    platform.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Do not use the error message component while users are typing or move to a different field
                    or tab. The error message should provide the next step that the user should take. It should
                    also provide the users with a way to leave the transaction instead of blocking the navigation.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Do not use the error message component while users are typing or move to a different field
                    or tab. The error message should provide the next step that the user should take. It should
                    also provide the users with a way to leave the transaction instead of blocking the navigation.
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
                    <li className="py-2">The error message should appear in red after the question or hint text </li>

                    <li className="py-2">Use a red border to provide a visual indication of where the error occurred - for instance,
                    if the user entered an invalid date range, the date field is highlighted within a red border
                    along with the error message</li>

                    <li className="py-2">Make sure the error message is displayed in plain, simple and concise language.</li>

                    <li className="py-2">Do not use technical jargon in the error message.</li>

                    <li className="py-2">Use consistent message formats across the application to avoid confusion and reduce
                    cognitive load on users</li>

                    <li className="py-2">Use specific message text to make it relevant and helpful</li>

                    <li className="py-2">Provide clear instructions and brief descriptions on what is required and the next steps</li>
                </ul>
            </div>
        </div>
    )
}

export default Tag
