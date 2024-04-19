import Modal from "../shared/components/modal";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(!showModal);
    }

    const actionBar = <div className="w-56">
        <button className="bg-blue-500 text-white w-24 rounded-md h-10 hover:bg-blue-400 float-left" onClick={handleClick}>OK</button>
        <button className="bg-blue-500 text-white w-24 rounded-md h-10 hover:bg-blue-400 float-right" onClick={handleClick}>Cancel</button>
    </div>

    const modal = <Modal toClose={handleClick} actionBar={actionBar} className={'h-4/6'}>
        <p>Here is some information about this reusable modal component:</p>
        <ul className="list-disc">
            <li>It is divided into two parts: Content & Action Bar</li>
            <li>Modal Content is provided as children prop</li>
            <li>Modal Action Bar is provide as normal props</li>
            <li>Action Bar will always be in the bottom</li>
            <li>There is always a cross button to close the dialog</li>
            <li>This is fully reusable component</li>
            <li>Modal  covers the whole screen</li>
        </ul>
    </Modal>;

    return <div>
        <button className="bg-blue-500 text-white rounded-md w-32 h-10 hover:bg-blue-400" onClick={handleClick}>Open Dialog</button>
        {showModal && modal}
    </div>
}

export default ModalPage