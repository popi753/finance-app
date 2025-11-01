import { useState} from 'react'

import OverviewPageTab from '../components/overviewPage/OverviewPageTab'
import OverviewPagePots from '../components/overviewPage/OverviewPagePots'
import OverviewPageTransactions from '../components/overviewPage/OverviewPageTransactions'
import OverviewPageBudgets from '../components/overviewPage/OverviewPageBudgets'
import OverviewPageRecurringBills from '../components/overviewPage/OverviewPageRecurringBills'


import '../styles/overview.css'


export default function Overview() {


    const [currentBalance,_setCurrentBalance] = useState("$4,836.00")
    const [income,_setIncome] = useState("$3,814.00")
    const [expenses,_setExpenses] = useState("$1,836.00")



    return(
        <>
            <section className="overview-page">
                <h1 className="text-1">Overview</h1>

                <div className="overview-page_tabs-container">
                    <OverviewPageTab title="Current Balance" value={currentBalance} />
                    <OverviewPageTab title="Income" value={income} />
                    <OverviewPageTab title="Expenses" value={expenses} />
                </div>

                <div className="overview-page_content">

                    <div className="overview-page_content-first-column">
                            <OverviewPagePots />
                            <OverviewPageTransactions />
                    </div>
                    <div className="overview-page_content-second-column">
                            <OverviewPageBudgets />
                            <OverviewPageRecurringBills />
                    </div>

                </div>
            </section>
        </>
    )
}