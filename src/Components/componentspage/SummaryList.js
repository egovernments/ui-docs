import { Card, Header } from '@egovernments/digit-ui-react-components'
import React from 'react'
import SummaryListImg from "../../assets/img/components/SummaryList.png"
import SummaryListTable from '../common/SummaryListTable'

const SummaryList = () => {
    return (
        <div className="md:w-5/6 w-full mb-60">
            <div className="pb-2">
                <Header>Summary List</Header>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Summary List component is used to summarize user inputs or synthesize any other
                    information on the screen.
                </p>
            </div>
            <div className="p-5 tableCard">
                <SummaryListTable />
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Guidelines</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    Follow the guidelines below to design the Summary List component in conformance with
                    the DIGIT design principles.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use this component to display the summary of user responses to applications,
                    questionnaires, or forms.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Do not use this component to display view of tasks or
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2"> Summarize the user responses and inputs in the summary list.</li>
                    <li className="py-2"> Provide a link that navigates the user back to the specified section in case they want to</li>
                    make any changes or update their responses before submitting.
                </ul>
            </div>
        </div>
    )
}

export default SummaryList
