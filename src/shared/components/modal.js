import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import classNames from 'classnames';


function Modal({ toClose, children, actionBar, className }) {
    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        let elem = document.createElement('div');
        elem.classList.add('model-container');
        document.body.appendChild(elem);
        document.body.classList.add('overflow-hidden')
        setDomReady(true);
        return () => {
            document.body.removeChild(elem);
            document.body.classList.remove('overflow-hidden')
            setDomReady(false);
        }
    }, []);

    return domReady ? ReactDOM.createPortal(
        <div>
            <div onClick={toClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className={classNames("fixed inset-12 p-12 pt-6 bg-white",className)}>
                <div className="flex justify-end" ><span className="text-2xl cursor-pointer"><RxCross2 onClick={toClose}/></span></div>
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>, document.querySelector('.model-container')) : null;
}

export default Modal