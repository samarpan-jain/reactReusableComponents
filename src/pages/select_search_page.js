import SelectSearch from "../shared/components/select_search";
import { useState } from "react";

function SelectSearchPage() {
    const multiple = true;
    const [selectedValue, setSelectedValue] = useState(null);
    const handleSelection = (selectedVal) => {
        setSelectedValue(selectedVal);
    }

    let selectCompData =
        [
            { id: '1', label: 'Banana', value: 'Banana' },
            { id: '2', label: 'Orange', value: 'Orange' },
            { id: '3', label: 'Mango', value: 'Mango' },
            { id: '4', label: 'Apple', value: 'Apple' }
        ]

    return <div>
        <div>Selected Value: {(multiple && selectedValue != null) ? ('' + selectedValue) : selectedValue}</div>
        <br />
        <SelectSearch options={selectCompData} multiple={multiple} handleSelection={handleSelection} placeholder='Please select the items' className='w-52' />
    </div>
}

export default SelectSearchPage