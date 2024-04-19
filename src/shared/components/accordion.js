import { useState } from "react";
import { RxChevronRight, RxCaretDown } from "react-icons/rx";

function Accordion({ data }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        if (nextIndex === expandedIndex) {
            setExpandedIndex(-1);
        }
        else {
            setExpandedIndex(nextIndex);
        }
    }

    const renderedItems =
        data.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const icon = <span className="text-2xl">{isExpanded ? <RxCaretDown /> : <RxChevronRight />}</span>
            return <div key={item.id}>
                <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {icon}{item.label}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        })

    return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion