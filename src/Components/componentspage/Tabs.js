import { Card, Header } from '@egovernments/digit-ui-react-components'
import React from 'react'

const Tabs = () => {
    return (
        <div className="md:w-5/6 w-full mb-60">
            <div className="pb-2">
                <Header>Tabs</Header>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Tab component allows users to navigate through different sections and view one
                    section at a time. This component is very useful to display related categories of content
                    without having to leave or navigate to another page.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4">

                </Card>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Guidelines</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    Use the design guidelines below to ensure visual consistency in the design and use of tabs
                    across DIGIT screens and applications.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use Tabs when content can be separated for specific views or when the first section or
                    default tab view is more important than others.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Do not use Tabs when the volume of content is too high. This might make the page slow to
                    load.
                </p>

                <p className="2xl:text-lg sm:text-sm">Do not use the component for important content since it hides it from users who may not
                    click on the relevant tabs.</p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">Use this component only when considered useful.</li>
                    <li className="py-2">Use simple and clear text labels for each tab to reflect on the kind of content available
                        on each tab.</li>
                    <li className="py-2">Tab order is important. Place the priority content in the first and default tab followed by the second and third.</li>
                    <li className="py-2">Limit the number of tabs to a maximum of 2 or 3.</li>
                    <li className="py-2"> Make sure tabs are not disabled since this might confuse the users.</li>
                </ul>
            </div>
        </div>
    )
}

export default Tabs
