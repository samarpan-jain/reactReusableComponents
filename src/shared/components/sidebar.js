import { NavLink } from "react-router-dom";
import "../common_files/style.css";

function SideBar({menu}){
    const sideBar = menu?.map(menu => <NavLink key={menu.name} to={menu.to}>{menu.name}</NavLink>)
    return <nav style={{ width: "15%", float: 'left'}}>{sideBar}</nav>
}

export default SideBar