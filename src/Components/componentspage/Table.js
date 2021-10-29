import { Card, Header } from '@egovernments/digit-ui-react-components'
import React from 'react'
import TableImg from "../../assets/img/components/Table.png"
import ReactTable from '../common/ReactTable'

const Tables = () => {

    return (
        <div className="md:w-5/6 w-full mb-60">
            <div className="pb-2">
                <Header>Table</Header>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Table component makes it easier to sort information for users.
                </p>
            </div>
            <div className="p-5 tableCard">
                <ReactTable />
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Guidelines</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    Follow the guidelines below to ensure the visual consistency of the component in
                    conformance to DIGIT design principles.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use the Table component where information can be easily arranged into distinct rows and
                    columns.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Do not use this component to arrange content on the page.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2"> Use a caption for the tables to provide a description of what the table contains.</li>
                    <li className="py-2">Use DIGIT {"< > < >"} classes to style the tables.</li>
                    <li className="py-2">Use distinct column headings and row headings to give an indication of the type of
                        information available in each cell.</li>
                    <li className="py-2"> Always align the numbers to the right.</li>
                </ul>
            </div>
        </div>
    )
}

export default Tables
