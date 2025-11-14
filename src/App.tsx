import { useState, useEffect, createContext} from 'react'

import { Routes, Route } from "react-router-dom"

import { onCheckProfile } from './model/auth'

import Overview from "./pages/Overview"
import Transactions from "./pages/Transactions"
import Budgets from "./pages/Budgets"
import Pots from "./pages/Pots"
import RecurringBills from "./pages/RecurringBills"
import Auth from "./pages/Auth"
import Missing from "./pages/Missing"

import Layout from "./components/Layout"


import './App.css'
import './styles/text.css'
import './styles/icons-wrappers.css'
import './styles/button.css'

export type contextType = null | [
  loggedIn: boolean,
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
];

export const UserContext = createContext<contextType>(null);

function App() {
  
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  
  useEffect(() => {
      const token = window.localStorage.getItem("token") || "";
      if (!loggedIn && token) {
        onCheckProfile(token).then(() => {
            setLoggedIn(true);
        }).catch((error)=>{
            console.log(error);
            window.localStorage.removeItem("token");
        });
      }
    }, [loggedIn]);
  

  return(
    <>
        <UserContext.Provider value={[loggedIn, setLoggedIn]}>
                <Routes>
                    {loggedIn ? 
                        <Route path="/" element={<Layout/>}>
                            <Route path='/Overview'        element={<Overview/>} />
                            <Route path='/Transactions'    element={<Transactions/>} />
                            <Route path='/Budgets'         element={<Budgets/>} />
                            <Route path='/Pots'            element={<Pots/>} />
                            <Route path='/Recurring bills' element={<RecurringBills/>} />
                        </Route> 
                             : 
                         <Route path="/"                    element={<Auth />} />
                        }
                    <Route path="*" element={<Missing />} />
                </Routes>

        </UserContext.Provider>
   
    </>
  );
};



export default App;
