
import OverviewPageBoxTitle from './OverviewPageBoxTitle';

import '../../styles/overviewPage/overviewPageRecurringBills.css'

export default function OverviewPageRecurringBills() {

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
        <div className="overview-page_recurring-bills overview-page_content-box">
            <OverviewPageBoxTitle title='Recurring Bills' details="See Details" link="/recurring bills"/>

            <ul className='overview-page_recurring-bills_content'>
            {arr.map((item, index) => (
                <OverviewPageRecurringBillsItem key={index} {...item} />
            ))}

            

            </ul>
        </div>
    )
};


type OverviewPageRecurringBillsItemProps = {
        title: string;
        amount: number;
};



function OverviewPageRecurringBillsItem({ title, amount }: OverviewPageRecurringBillsItemProps) {

    return (
        
        <li className='overview-page_recurring-bills_item'>
            <div>
                <p className="text-4 text-light">{title}</p>
            </div>

            <div className="overview-page_recurring-bills_item_info">
                <p className={`text-4 text-bold text-dark`}>{`$${amount}`}</p>
            </div>
        </li>

        )
}