
import OverviewPageBoxTitle from './OverviewPageBoxTitle';

import jar from '../../assets/svg/jar.svg';

import '../../styles/overviewPage/overviewPagePots.css'

export default function OverviewPagePots() {
    return (
        <div className="overview-page_pots overview-page_content-box">
            <OverviewPageBoxTitle title='Pots' details="See Details" link="/pots"/>

            <div className="overview-page_pots_content">
                <div className="overview-page_pots_total-saved">
                    <div className="icon-wrapper-xl">
                        <img src={jar} alt="" />
                    </div>
                    <div className='overview-page_pots_total-saved_details'>
                        <span className='text-4'>Total saved</span>
                        <span className='text-1'>$850</span>
                    </div>

                </div>
                <ul className="overview-page_pots_small-savings">
                        <div className="overview-page_pots_small-savings_first-row">
                            <OverviewPagePotsTab label='Saving' value={159}/>
                            <OverviewPagePotsTab label='Gift' value={159}/>
                        </div>
                        <div className="overview-page_pots_small-savings_second-row">
                            
                            <OverviewPagePotsTab label='Concert Ticket' value={159}/>
                            <OverviewPagePotsTab label='New Laptop' value={159}/>
                        </div>

                </ul>
            </div>
        </div>
    )
};






type OverviewPagePotsTabProps = {
    label:string;
    value: number;
}


export function OverviewPagePotsTab({label,value}:OverviewPagePotsTabProps) {
    return (
        <li className="overview-page_pots_small-savings_tab">
            <div className="overview-page_pots_small-savings_tab_line">
            </div>
            <div className="overview-page_pots_small-savings_tab_details">
                    <span className="text-5">{label}</span>
                    <span className="text-4 text-bold">${value}</span>
            </div>
            
        </li>
    )
}