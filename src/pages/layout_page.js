import { Outlet } from "react-router-dom";
import { menu } from "../shared/common_files/menu"
import SideBar from "../shared/components/sidebar";

function LayoutPage() {
    return (
        <div className="m-5">
            <SideBar menu = {menu}/>
            <main style = {{ float: "left", marginLeft: '2.5%', width: '80%' }}>
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutPage;
