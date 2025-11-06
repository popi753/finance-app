import { useRef,useEffect } from 'react';

import {type transaction} from '../../model/transactions'
import formatCurrency from '../../utils/formatCurrency';

import reactIcon from '../../assets/react.svg'
import caret from "../../assets/svg/caret.svg"

import "../../styles/budgetsPage/budgetsTab.css"

 const transactions : transaction[] = [
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:-45.00},
]

export default function BudgetsPageTab() {

      const detailsRef = useRef<HTMLDetailsElement>(null);
    
      useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          const details = detailsRef.current;
          if (details && details.open && !details.contains(event.target as Node)) {
            details.open = false;
          };
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
      }, []);

      function openDialog() {
        console.log("opening dialog")
      }


    return(
        <div className="budgets-page_tab content-box">
            <div className="budgets-page_tab-heading">
                <div className="budgets-page_tab-title">
                        <span className="circle"></span>
                        <span className="text-2 text-dark">
                            Entertainment
                        </span>
                </div>
                <details className='budgets-page_tab-dropdown' ref={detailsRef}>
                    <summary>
                    </summary>
                    <ul className='budgets-page_dropdown-menu'>
                        <li>
                            <button onClick={()=>{openDialog()}}>
                                <span className="text-4 text-dark">Edit Budget</span>
                            </button>
                        </li>
                        <div className="horizontal-line"></div>
                        <li>
                            <button onClick={()=>{openDialog()}}>
                                <span className='text-4 text-red'>Delete Budget</span>
                            </button>
                        </li>
                    </ul>
                </details>
            </div>

            <div className="budgets-page_tab-statistics">
                <span className="text-4 text-light">
                        {`Maximum of $${50}`}
                </span>
                <span className="budgets-page_tab-statistics_bar">
                    <div >
                    </div>
                </span>

                <div className="budgets-page_tab-statistics_amounts">
                        <div>
                            <span className="vertical-line"></span>
                            <div className="budgets-page_tab-statistics_amount-wrapper">
                                <span className="text-5 text-light">Spent</span>
                                <span className="text-4 text-dark text-bold">$15</span>
                            </div>
                        </div>

                        <div >
                            <span className="vertical-line background-beige"></span>
                            <div className="budgets-page_tab-statistics_amount-wrapper">
                                <span className="text-5 text-light">Remaining</span>
                                <span className="text-4 text-dark text-bold">$15</span>
                            </div>
                        </div>
                </div>

            </div>

            <div className="budgets-page_tab-latest-spending">
                <div className="budgets-page_tab-latest-spending_title">
                    <h3 className="text-3 text-dark">
                        Latest Spending
                    </h3>
                    <button className="">
                        <span className="text-4 text-light">See all</span>
                        <span className="icon-wrapper-xs">
                            <img src={caret} alt="caret icon >" />
                        </span>
                    </button>
                </div>
                <ul className="budgets-page_tab-latest-spending-list">
                    {transactions.map((item, index) => (
                                                    <ListItem key={index} transaction={item} />
                      ))}
                </ul>
            </div>


        </div>
    )
}

function ListItem({transaction}: {transaction: transaction}){
    const {name, date,amount} = transaction || {};

    return(
        <li>
                    <div>
                        <span className="icon-wrapper-xl">
                            <img src={reactIcon} alt="picture" />
                        </span>
                        <span className='text-4 text-bold text-dark'>{name}</span>
                    </div>

                    <div>
                        <span className={`text-5 ${amount > 0 ? 'text-green' : 'text-dark'}`}>{formatCurrency(amount)}</span>
                        <span className="text-5 text-light">{date}</span>
                    </div>
        </li>
    )
}