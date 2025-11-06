import BudgetsPageChartContainer from "../components/budgetsPage/BudgetsPageChartContainer"
import BudgetsPageTab from "../components/budgetsPage/BudgetsPageTab"

import "../styles/budgetsPage/budgets.css"

export default function Budgets() {
    return(
        <section className="budgets-page">
            <div className="budgets-page_title-container">
                 <h1 className="text-1">Transactions</h1>
                 <button className="btn-primary">
                    <span className="text-4 text-bold">
                        + Add New Budget
                    </span>
                 </button>
            </div>
            <div className="budgets-page_content">

                <BudgetsPageChartContainer/>

                <div className="budgets-page_tabs-container">
                    <BudgetsPageTab/>
                    <BudgetsPageTab/>
                    <BudgetsPageTab/>
                    <BudgetsPageTab/>

                </div>
            </div>



        </section>
    )
}