import Table from "../shared/components/table";

const data = [
    {
        name: 'Mango',
        quantity: 2.5,
        score: 1,
        color: 'Red'
    },
    {
        name: 'Apple',
        quantity: 3,
        score: 4,
        color: 'Yellow'
    },
    {
        name: 'Orange',
        quantity: 1,
        score: 2,
        color: 'Orange'
    },
]

const tableConfig = [
    {
        label: 'Name',
        render: (fruit) => fruit?.name,
        sortValue: (fruit) => fruit.name
    },
    {
        label: 'Quantity(per Kg)',
        render: (fruit) => fruit.quantity,
        sortValue: (fruit) => fruit.quantity
    },
    {
        label: 'Score',
        render: (fruit) => fruit.score,
        sortValue: (fruit) => fruit.score
    },
    {
        label: 'Colour',
        render: (fruit) => <div className='p-3 m-2' style={{ backgroundColor: `${fruit.color.toLowerCase()}` }}></div>
    }
]

const keyFn = (fruit) => {
    return fruit.name
}

function TablePage() {
    return <Table tableData={data} tableConfig={tableConfig} keyFn={keyFn} />
}

export default TablePage