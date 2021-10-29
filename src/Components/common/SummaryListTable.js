import React from 'react'
import { useTable } from 'react-table'

function SummaryListTable() {
    const data = React.useMemo(
        () => [
            {
                col1: <span className="text-nav font-bold text-lg">Residential Property</span>,
                col2: 'Yes',
                col3: <span className="text-border">Change</span>
            },
            {
                col1: <span className="text-nav font-bold text-lg">Type of property</span>,
                col2: 'Independent Building',
                col3: <span className="text-border">Change</span>
            },
            {
                col1: <span className="text-nav font-bold text-lg">No. of Floors</span>,
                col2: 'Ground + 1',
                col3: <span className="text-border">Change</span>
            },
            {
                col1: <span className="text-nav font-bold text-lg">No. of Basements</span>,
                col2: 'None',
                col3: <span className="text-border">Change</span>
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
            {
                Header: 'Column 3',
                accessor: 'col3',
            },
            {
                Header: 'Column 4',
                accessor: 'col4',
            },
            {
                Header: 'Column 5',
                accessor: 'col5',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <table {...getTableProps()} className="tabelMain">
            <thead className="summary_ListHead">
                <h2>Check your answers</h2>
                <h3>Property Details</h3>
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} style={{ borderBottom: '1px solid #B1B4B6' }}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '20px 40px',
                                            // borderBottom: '1px solid #B1B4B6',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SummaryListTable