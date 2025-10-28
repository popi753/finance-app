import { Outlet} from "react-router-dom"

import SidebarItem from "./sidebar-item";

import "../styles/layout.css"

type layoutProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Layout({open, setOpen}: layoutProps) {



    return (
        <>
            {open && 
            <aside className="aside">
                <nav className="sidebar">
                    <h1>finance</h1>
                    <ul className="sidebar_list">
                        <SidebarItem icon="" title="Overview"/>
                    </ul>
                </nav>
            </aside>
            }
            <main className="main-container">
                <Outlet />
            </main>



        </>
    )
}

