
import { Link } from 'react-router-dom';

import caret from '../../assets/svg/caret.svg';

type OverviewPageBoxTitleProps = {
    title: string;
    details: string;
    link: string;
}

export default function OverviewPageBoxTitle({ title, details, link }: OverviewPageBoxTitleProps) {
    return (
        <div className="overview-page_content-box_title">
                <span className="text-2">{title}</span>
                <Link to={link} className="overview-page_content-box_title-details">
                    <span className="text-4">{details}</span>
                    <span className="icon-wrapper-xs">
                        <img src={caret} alt="caret icon >" />
                    </span>
                </Link>
        </div>
    )
}