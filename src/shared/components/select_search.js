import { useState, useEffect, useRef } from "react";
import { RxCaretDown } from "react-icons/rx";
import classNames from 'classnames';

function SelectSearch({ options, multiple, handleSelection, placeholder, className }) {
    const [isVisible, setIsVisible] = useState(false);
    const [filterOption, setFilterOption] = useState(options?options:[]);
    const [filterText, setFilterText] = useState('');
    const [label, setLabel] = useState(null);
    const [value, setValue] = useState(null);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (divEl.current && !divEl.current.contains(event.target)) {
                setIsVisible(false)
            }
            else {
                return
            }
        }
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);

    const handleSelect = (option) => {
        let optionLabel = null;
        let optionValue = null;
        if (multiple === false) {
            optionLabel = option.label;
            optionValue = option.value
        }
        else {
            if (value != null) {
                const alreadySelectedVal = value.filter(val => val !== option.value);
                const alreadySelectedLabel = label.filter(val => val !== option.label);
                if (alreadySelectedVal.length === value.length) {
                    optionValue = [...value, option.value];
                    optionLabel = [...label, option.label]
                }
                else {
                    optionValue = alreadySelectedVal;
                    optionLabel = alreadySelectedLabel;
                }
            }
            else {
                optionLabel = [option.label];
                optionValue = [option.value]
            }
        }
        setValue(optionValue);
        setLabel(optionLabel);
        handleSelection(optionValue);
    }

    const getFilterOptions = (event) => {
        setFilterText(event.target.value);
        if (event.target.value === '') {
            setFilterOption(options)
        }
        else {
            let newOptions = options.filter(option => option.label.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
            setFilterOption(newOptions);
        }
    }

    const searchBar = <input className="flex p-3 border-b items-center cursor-pointer w-full" placeholder="Search here..." type="text" value={filterText} onChange={getFilterOptions} />

    const allOptions = filterOption?.map((option) => {
        return <div className="flex p-1 hover:bg-gray-50 border-b items-center cursor-pointer overflow-x-hidden text-ellipsis" key={option.id} onClick={() => handleSelect(option)}>{multiple && <span className="m-2"><input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" checked={value ? value.includes(option.value) : false} readOnly /></span>}<span className="overflow-hidden text-ellipsis">{option.label}</span></div>
    })

    return <div ref={divEl} className={classNames("relative",className)}>
        <div className="flex p-3 justify-between border-b items-center cursor-pointer border rounded shadow bg-white" onClick={() => { setIsVisible(!isVisible) }}><span className="overflow-hidden text-ellipsis" style={{ width: '90%' }}>{((multiple && label != null) ? ('' + label) : label) || <span className="text-slate-400 bg-white-50 text-sm text-ellipsis"> {placeholder} </span>} </span> <span className="text-2xl"><RxCaretDown /></span></div>
        {isVisible && <div className="absolute top-full h-56 border rounded shadow bg-white w-full overflow-y-auto">{searchBar}{allOptions}</div>}
    </div>
}

export default SelectSearch