import { Card, Header } from '@egovernments/digit-ui-react-components'
import React from 'react'
import { Link } from 'react-router-dom'
import SideNavImg from "../../assets/img/components/SideNav.png"


const SideNav = () => {
    return (
        <div className="md:w-5/6 w-full mb-60">
            <div className="pb-2">
                <Header>Side Nav</Header>
            </div>
            <div className="pb-4">
                <h2 className="sm:text-xl font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Tag component is used to display the status of specific user actions.
                </p>
            </div>
            <Card className="pb-4">
                <div className="sidebar">
                    <Link to="/digit-ui/employee">
                        <div className="actions active">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white" />
                            </svg>
                        </div>
                    </Link>
                    <a href="/employee">
                        <div className="actions">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M8.17 5.7L1 10.48V21h5v-8h4v8h5V10.25z" fill="white" />
                                <path d="M17 7h2v2h-2z" fill="none" />
                                <path d="M10 3v1.51l2 1.33L13.73 7H15v.85l2 1.34V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z" fill="white" />
                            </svg>
                        </div>
                    </a>
                    <a href="/employee">
                        <div className="actions">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </a>
                    <a href="/employee">
                        <div className="actions">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M24 0H0v24h24z" fill="none" />
                                <path
                                    d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </a>
                </div>
            </Card>
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
                    The error message component should be displayed when there is an input validation error.
                    Any other messages should follow the standard message format.
                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When not to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Do not use the error message component while users are typing or move to a different field
                    or tab. The error message should provide the next step that the user should take. It should
                    also provide the users with a way to leave the transaction instead of blocking the navigation.                </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">The error message should appear in red after the question or hint text</li>
                    <li className="py-2">Use a red border to provide a visual indication of where the error occurred - for instance,
                        if the user entered an invalid date range, the date field is highlighted within a red border
                        along with the error message</li>
                    <li className="py-2">Make sure the error message is displayed in plain, simple and concise language. </li>
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

export default SideNav
