import React from 'react'
import { usePagination, useTable } from 'react-table'
import  Pagination  from './Pagination'

function ReactTable() {
    const data = React.useMemo(
        () => [
            {
                col1: <span className="text-border">PB-FSM-2019-04-23-898898</span>,
                col2: '12/08/2020',
                col3: 'Alakapuri',
                col4: 'Pending for Payment',
                col5: <span className="tagInactive">12</span>,
            },
            {
                col1: <span className="text-border">PB-FSM-2019-04-23-898898</span>,
                col2: '12/08/2020',
                col3: 'Alakapuri',
                col4: 'Pending for Payment',
                col5: <span className="tagInactive">12</span>,
            },
            {
                col1: <span className="text-border">PB-FSM-2019-04-23-898898</span>,
                col2: '12/08/2020',
                col3: 'Alakapuri',
                col4: 'Pending for Payment',
                col5: <span className="tagInactive">12</span>,
            },
            {
                col1: <span className="text-border">PB-FSM-2019-04-23-898898</span>,
                col2: '12/08/2020',
                col3: 'Alakapuri',
                col4: 'Pending for Payment',
                col5: <span className="tagInactive">12</span>,
            },
            {
                col1: <span className="text-border">PB-FSM-2019-04-23-898898</span>,
                col2: '12/08/2020',
                col3: 'Alakapuri',
                col4: 'Pending for Payment',
                col5: <span className="tagActive">12</span>,
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
        page,
        nextPage,
        PreviousPage,
        canNextPage,
        canPreviousPage
    } = useTable(
        { columns, data },
        usePagination
    )

    return (
        <>
            <table {...getTableProps()} className="tabelMain">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: '1px solid #B1B4B6',
                                        color: '#0B0C0',
                                        fontWeight: 'bold',
                                        textAlign: 'left',
                                        padding: '20px 40px'
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
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
            {/* Pagination */}
            <Pagination />
            {/* Pagination */}
        </>
    )
}

export default ReactTable