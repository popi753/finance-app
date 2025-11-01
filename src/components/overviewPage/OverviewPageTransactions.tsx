
import OverviewPageBoxTitle from './OverviewPageBoxTitle';

import '../../styles/overviewPage/overviewPageTransactions.css'

export default function OverviewPageTransactions() {

    const arr = [{
        img: '',
        name:"Emma Watson",
        amount:  100,
        date:"2023-03-15"
                },
            {
        img: '',
        name:"Emma Watson",
        amount:  -100,
        date:"2023-03-15"
                },{
        img: '',
        name:"Emma Watson",
        amount:  100,
        date:"2023-03-15"
                }];


    return (
        <div className="overview-page_transactions overview-page_content-box">
            <OverviewPageBoxTitle title='Transactions' details="View All" link="/transactions"/>

            <ul className='overview-page_transactions_content'>
            {arr.map((item, index) => (
                <OverviewPageTransactionsItem key={index} item={item} />
            ))}

            </ul>
        </div>
    )
};






import budgets from "../../assets/svg/budgets.svg";

type OverviewPageTransactionsItemProps = {
    item: {
        img: string;
        name: string;
        amount: number;
        date: string;
    };
};

function OverviewPageTransactionsItem({ item }: OverviewPageTransactionsItemProps) {
    const { img, name, amount, date } = item;

    return (
        
        <li className='overview-page_transactions_item'>

            <div>
                <div className="icon-wrapper-xl">
                    <img src={img || budgets} alt="" />
                </div>
                <p className="text-4 text-dark text-bold">{name}</p>
            </div>

            <div className="overview-page_transactions_item_info">
                <p className={`text-4 text-bold ${amount > 0 ? 'text-green' : 'text-red'}`}>{`${amount > 0 ? '+' : '-'}$${Math.abs(amount)}`}</p>
                <span className="text-5 text-light">{date}</span>
            </div>
            

        </li>

        )
}