import { useState} from 'react'

import Login from '../components/Login'
import Register from '../components/Register'

import logo from '../assets/svg/finance-logo.svg'

import '../styles/auth.css'

export default function Auth() {
    const [haveAcc, setHaveAcc] = useState<boolean>(true);

    return(
        <>
            <div className="auth-page">
                <div className="auth-illustration_container">
                    <div className="icon-wrapper-logo">
                        <img src={logo} className="icon-logo" alt="Logo" />
                    </div>
                    <div className='auth-illustration_details'>
                        <h1 className='text-1'>
                            Keep track of your money
                            and save for your future</h1>
                        <p className='text-4'>
                            Personal finance app puts you in control of your spending. Track
                            transactions, set budgets, and add to savings pots easily.</p>
                    </div>
                </div>
                <div className="auth-component-container">
                    {haveAcc ? 
                                <Login setHaveAcc={setHaveAcc} /> 
                                : <Register setHaveAcc={setHaveAcc}/>}
                </div>
            </div>
        </>
    );
};