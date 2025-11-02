import { Link,useLocation } from "react-router-dom"

type sidebarItemProps = {
    arr: string[];
}

export default function SidebarItem({arr}:sidebarItemProps) {

    const location = useLocation();
    const isActive = location.pathname.replace("%20", " ") === `/${arr[0].toLowerCase()}`;

    return (
        <>
            <Link to={`/${arr[0].toLowerCase()}`}>
                <li className={`sidebar_item ${isActive ? "active-link" : ""}` }>
                    <div className="icon-wrapper-m">
                        <img src={arr[1]} className="icon" alt={arr[0]} title={arr[0]}/>
                    </div>
                    <span className="text-3">{arr[0]}</span>
                </li>
            </Link>
        </>
    )

}
