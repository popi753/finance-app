
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
                            <OverviewPagePotsTab title='Saving' amount={159}/>
                            <OverviewPagePotsTab title='Gift' amount={159}/>
                        </div>
                        <div className="overview-page_pots_small-savings_second-row">
                            
                            <OverviewPagePotsTab title='Concert Ticket' amount={159}/>
                            <OverviewPagePotsTab title='New Laptop' amount={159}/>
                        </div>

                </ul>
            </div>
        </div>
    )
};






type OverviewPagePotsTabProps = {
    title:string;
    amount: number;
}


export function OverviewPagePotsTab({title,amount}:OverviewPagePotsTabProps) {
    return (
        <li className="overview-page_pots_small-savings_tab">
            <div className="overview-page_pots_small-savings_tab_line">
            </div>
            <div className="overview-page_pots_small-savings_tab_details">
                    <span className="text-5">{title}</span>
                    <span className="text-4 text-bold">${amount}</span>
            </div>
            
        </li>
    )
}