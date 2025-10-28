import { Routes, Route } from "react-router-dom"

import Overview from "./pages/Overview"
import Transactions from "./pages/Transactions"
import Budgets from "./pages/Budgets"
import Pots from "./pages/Pots"
import RecurringBills from "./pages/RecurringBills"
import Missing from "./pages/Missing"

import Layout from "./components/Layout"


import './styles/text.css'
import './styles/icons-wrappers.css'
import './App.css'

function App() {
  

  return(
    <>
            
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path='/Overview'       element={<Overview/>} />
                        <Route path='/Transactions'   element={<Transactions/>} />
                        <Route path='/Budgets'        element={<Budgets/>} />
                        <Route path='/Pots'           element={<Pots/>} />
                        <Route path='/Recurring bills' element={<RecurringBills/>} />


                        

                    </Route>
                    <Route path="*" element={<Missing />} />
                </Routes>


   
    </>
  );
};

export default App;
