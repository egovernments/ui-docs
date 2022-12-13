import { Card, Header, RadioButtons } from '@egovernments/digit-ui-react-components'
import React from 'react'
import PaginationImg from "../../assets/img/all_fresh/Pagination.png"

const isMobile = window.innerWidth < 768;
const Pagination = () => {
    const availableOptions = [
        { code: "ASSIGNED_TO_ME", name: `${("ES_INBOX_ASSIGNED_TO_ME")} (0)` },
        { code: "ASSIGNED_TO_ALL", name: `${("ES_INBOX_ASSIGNED_TO_ALL")} ` },
      ];
    return (
        <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
            <div className="pb-2">
                <Header>Pagination</Header>
            </div>
            <div className="pb-4">
                <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
                <p className="md:text-xs lg:text-sm 2xl:text-base">
                    The Pagination component is used to divide content into distinct pages. It allows users to
                    navigate to specific pages with ease. This prevents the users from getting overwhelmed
                    with too much content on a single page.
                </p>
            </div>
            <div className="pb-4">
                <Card className="py-4">
                    <img src={PaginationImg} alt="pagination" className="w-1/2" />
                </Card>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    When to Apply
                </h3>
                <p className="2xl:text-lg sm:text-sm">
                    Use this component to allow users to navigate between multiple pages. Use pagination
                    where information or data spans across multiple pages such as directories, search results,
                    or tables.
                </p>
                <p className="2xl:text-lg sm:text-sm"> Set a maximum display limit for each page. Use the ellipsis (...) symbol to truncate the
                    remaining page list. </p>
            </div>
            <div className="sm:w-3/5 w-full py-4">
                <h3 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">
                    How to Apply
                </h3>
                <ul className="list-outside list-disc pl-4">
                    <li className="py-2">
                        Left align the pagination list.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination
