import { useState, useEffect } from "react"
import { GoArrowDown, GoArrowUp } from "react-icons/go"
import { useCommonFunc } from "../hooks/useCommonFunc";

function Table({ tableData, tableConfig, keyFn }) {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [renderData, setRenderData] = useState(tableData);
    const [sortData] = useCommonFunc();

    useEffect(() => {
        if (tableConfig.find(column => column.sortValue !== undefined)) {
            const column = tableConfig.find(column => column.label === sortBy);
            const sortedData  = sortData(tableData,column,sortOrder);
            setRenderData(sortedData)
        }
    }, [sortBy, sortData, sortOrder, tableConfig, tableData])

    const setSortData = (label) => {
        if (sortBy !== label) {
            setSortOrder('asc');
            setSortBy(label);
            return
        }
        if (sortOrder == null) {
            setSortOrder('asc');
        }
        else if (sortOrder === 'asc') {
            setSortOrder('desc');
        }
        else if (sortOrder === 'desc') {
            setSortOrder(null)
        }
    }

    const headers = tableConfig.map(column =>
        <th className="p-3 cursor-pointer hover:bg-gray-100" key={column.label} onClick={column.sortValue ? () => setSortData(column.label) : null}>
            <div className="flex items-center">
                {column.sortValue && getSortIcons(column.label, sortBy, sortOrder)}{column.label}
            </div>
        </th>
    )

    const rows = renderData.map((rowData) => {
        const cells = tableConfig.map(
            column => <td className="p-3 text-center" key={column.label}>{column.render(rowData)}</td>
        )
        return <tr className="border-b" key={keyFn(rowData)}>{cells}</tr>
    })


    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {headers}
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

function getSortIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div> <GoArrowUp /><GoArrowDown /> </div>
    }
    if (sortOrder == null) {
        return <div> <GoArrowUp /><GoArrowDown /> </div>
    }
    else if (sortOrder === 'asc') {
        return <div> <GoArrowUp /> </div>
    }
    else if (sortOrder === 'desc') {
        return <div> <GoArrowDown /> </div>
    }
}


export default Table