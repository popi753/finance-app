import { useState} from 'react'

import { Routes, Route } from "react-router-dom"

import Overview from "./pages/Overview"
import Missing from "./pages/Missing"

import Layout from "./components/Layout"

import './App.css'

function App() {
  
  const [open,setOpen] = useState(true);

  return(
    <>
            
                <Routes>
                    <Route path="/" element={<Layout open={open} setOpen={setOpen}/>}>
                        <Route index element={<Overview/>} />




                        

                    </Route>
                    <Route path="*" element={<Missing />} />
                </Routes>


   
    </>
  );
};

export default App;
