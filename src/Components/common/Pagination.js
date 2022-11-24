import React from 'react'
import PaginationImg1 from "../../assets/img/components/pagination/1.png"
import PaginationImg2 from "../../assets/img/components/pagination/2.png"

const Pagination = () => {
    return (
        <div className="pagination">
            <select
                className="text-input_border pr-3"
            >
                <option key="10" value="10" selected>
                    Rows 10
                </option>
                <option key="20" value="20">
                    Rows 20
                </option>
                <option key="30" value="30">
                    Rows 30
                </option>
            </select>
            <span className="text-input_border px-4">
                {`1 - 5 of 5`}
            </span>
            <span className="flex items-center">
                <img src={PaginationImg1} alt="|<" className="px-3" />
                <img src={PaginationImg2} alt=">" className="px-3" />
                <img src={PaginationImg2} alt="<" className="transform rotate-180 px-3" />
                <img src={PaginationImg1} alt=">|" className="transform rotate-180 px-3" />
            </span>
        </div>
    )
}
export default Pagination
