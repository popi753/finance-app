import OverviewPageBoxTitle from './OverviewPageBoxTitle';
import { OverviewPagePotsTab } from './OverviewPagePots';

import '../../styles/overviewPage/overviewPageBudgets.css'

export default function OverviewPageBudgets() {

    const arr = [{
        title: "Netflix",
        amount:  15,
    },
    {
        title: "Spotify",
        amount:  10,
    },{
        title: "Netflix",
        amount:  15,
    },]

    return (
        <div className="overview-page_budgets overview-page_content-box">
            <OverviewPageBoxTitle title='Budgets' details="See Details" link="/budgets"/>

            <div className='overview-page_budgets_content'>
                <div className='overview-page_budgets_chart'>
                    <span className='text-1 text-dark'>$338 </span>
                    <span className='text-4 text-light'>of $975 limit</span>
                </div>  
                <ul className='overview-page_budgets_list'>
                    {arr.map((item, index) => (
                        <OverviewPagePotsTab key={index} {...item} />
                    ))}
                </ul>

            </div>
        </div>
    )
};

