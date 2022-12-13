import { Card, DatePicker, Header } from '@egovernments/digit-ui-react-components'
import React, { useState } from 'react'
import DateInputImg from "../../assets/img/all_fresh/DateInput.png"

const DateInput = () => {
    const [date, setDate] = useState(Date());
    const isMobile = window.innerWidth < 768;
    const handleDate = (e) => {
        setDate(e)
    }
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Date Input</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Date Input component allows users to choose the relevant dates for specific queries or
                    user input fields. DIGIT design guidelines prescribe the use of a standardized date picker
                    component for use across all modules and screens.
                </p>
            </div>
            
                <Card className="card py-4">
                    <img src={DateInputImg} alt="date" className="w-1/2" />
                </Card>
            
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Date Input components are used wherever the dates are required from the users. It may be for filling in application details, service details, or using the search filters to fetch specific data records. Users can input a single date or specify a range of dates.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Do not use this component when specific date details are unlikely to be available with the users.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                        Provide a Date Input box - a popup calendar opens when the user clicks on this box
                    </li>
                    <li className="py-2">Users can select the date using the calendarDo not add any pre-selected default options as this may confuse users</li>
                </ul>
            </div>
        </div>
    )
}

export default DateInput
