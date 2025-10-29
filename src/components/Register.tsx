import { useState, useContext, useCallback } from 'react';

import { UserContext, type contextType } from "../App";
import { onRegister } from '../model/auth';

import Input from "./Input"

import eye from "../assets/svg/eye.svg";

import {type authProps } from "./Login"

type error = {
    username: string,
    email: string,
    password: string,
};

export default function Register({ setHaveAcc }: authProps) {

    const [_loggedIn, setLoggedIn] = useContext<contextType>(UserContext) || [];

    const [error, setError] = useState<error>({username:"", email: "", password: "" });

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setError({username: "", email: "", password: "" });

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        let errorExist = false;

        if (form.username.value === "" || form.username.value.length < 3) {
            setError(prev => ({ ...prev, name: "Name must be at least 3 characters long" }));
            errorExist = true;
        };

        if (form.email.value === "" || form.email.value.length < 3) {
            setError(prev => ({ ...prev, email: "Email must be at least 3 characters long" }));
            errorExist = true;
        };

        if (form.password.value === "" || form.password.value.length < 8) {
            setError(prev => ({ ...prev, password: "Password must be at least 8 characters long" }));
            errorExist = true;
        };

        if(errorExist){
            return;
        }

        onRegister({ formData }).then((data) => {
            console.log(data)
            setLoggedIn && setLoggedIn(true);
        }).catch((error) => {
            setError(prev => ({ ...prev, ...error }));
        });
    }, [setLoggedIn])

    return (
        <>
                <form className='auth-form' 
                onSubmit={(e) => handleSubmit(e)}
                >
                    <h1 className='auth-form_title text-1'>Sign up</h1>

                    <div className="auth-form_inputs-container">
                        <Input 
                                 type='text'
                                 id="username"
                                 placeholder='Name'
                                 required={true}
                                 error={error.username}
                                 minLength={3}
                                  />

                        <Input 
                                 type='email'
                                 id="email"
                                 placeholder='Email'
                                 required={true}
                                 error={error.email}
                                 minLength={3}
                                  />

                        <Input
                                 type='password'
                                 id="password"
                                 placeholder='Password'
                                 required={true} 
                                 error={error.password}
                                 minLength={8}
                                 icon={eye}
                                 iconClassName="eye"
                                  />
                    </div>

                    <button className='btn-primary' type="submit">
                        <span className="text-4 text-bold">
                            Create Account
                        </span>
                    </button>

                    <span className="auth-link_text text-4">Already have an account? 
                            <span className='auth-link text-4 text-bold' onClick={() => setHaveAcc(prev => !prev)}>Login</span>
                     </span>
                </form>
        </>
    );
};
