import { Link } from "react-router-dom"

type sidebarItemProps = {
    icon: string;
    title: string;
}

export default function SidebarItem({icon, title}:sidebarItemProps) {


    return (
        <>
            <Link to={`/${title.toLowerCase()}`}>
                <li className="sidebar_item">
                    <div className="icon-wrapper-medium">
                        <img src={icon} className="icon" alt={title} />
                    </div>
                    <span className="sidebar_item-title">{title}</span>
                </li>
            </Link>
        </>
    )

}
