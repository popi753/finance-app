import { useState,useContext } from "react";
import { Outlet, useNavigate} from "react-router-dom"

import { UserContext, type contextType } from "../App";

import SidebarItem from "./sidebar-item";

import logo from "../assets/svg/finance-logo.svg"
import overview from "../assets/svg/overview.svg"
import transactions from "../assets/svg/transactions.svg"
import budgets from "../assets/svg/budgets.svg"
import pots from "../assets/svg/pots.svg"
import recurring from "../assets/svg/recurring bills.svg"
import logOut from "../assets/svg/log out.svg"
import minimize from "../assets/svg/minimize.svg"

import "../styles/layout.css"


const iconMap: { [key: string]: string } = {
    "Overview": overview,
    "Transactions": transactions,
    "Budgets": budgets,
    "Pots": pots,
    "Recurring bills": recurring
}

export default function Layout() {

    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useContext<contextType>(UserContext) || [null, () => { }];
    

    const [fullOpen,setFullOpen] = useState<boolean>(true);

    return (
        <>
            <aside className={`aside ${!fullOpen ? "aside-minimized" : ""}`}>
                <nav className="sidebar">
                    <div className="icon-wrapper-logo">
                        <img src={logo} className="icon-logo" alt="Logo" />
                    </div>
                    <ul className="sidebar_list">
                        {Object.entries(iconMap).map((item, index)=>{
                            return(
                                <SidebarItem key={index} arr={item}/>
                            )
                        })}
                    </ul>

                    

                    {loggedIn && <div className="sidebar_item" onClick={()=>{
                        navigate("/")
                        setLoggedIn(false);
                        window.localStorage.removeItem("token");
                    }}>
                        <div className="icon-wrapper-m log-out-icon">
                            <img src={logOut} className="icon-logo" alt="Logo" />
                        </div>
                        <span className="text-3">Log out</span>
                    </div>
                    }
                    <div className="sidebar_minimize sidebar_item" onClick={()=>{
                        setFullOpen(prev=>!prev)
                    }}>
                        <div className="icon-wrapper-m">
                            <img src={minimize} alt="change menu" title="change menu's size"/>
                        </div>
                        <span className="text-3">Minimize Menu</span>
                    </div>
                </nav>
            </aside>

            <main className="main-container">
                <Outlet />
            </main>



        </>
    )
}

