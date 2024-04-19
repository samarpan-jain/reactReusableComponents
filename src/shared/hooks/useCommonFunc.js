import { useCallback } from "react";

function useCommonFunc(){

    const sortData = useCallback((data,sortBy,sortOrder) => {
        if (sortOrder == null) {
            return data
        }
        const sortedData = [...data];
        sortedData.sort((a, b) => {
            const valueA = (sortBy.sortValue(a)!==undefined)?(sortBy?.sortValue(a)):a[sortBy];
            const valueB = (sortBy.sortValue(b)!==undefined)?(sortBy?.sortValue(b)):b[sortBy];
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;
            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            }
            else {
                return (valueA - valueB) * reverseOrder
            }
        })
        return (sortedData);
    },[])

    return [sortData]
}

export {useCommonFunc}