import { useState, useContext, useCallback, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext, type contextType } from "../../App";
import { onRegister } from '../../model/auth';

import Input from "./Input"

import eye from "../../assets/svg/eye.svg";

export type authProps = {
    setHaveAcc: React.Dispatch<React.SetStateAction<boolean>>;
};

type error = {
    name: string,
    email: string,
    password: string,
};

export default function Register({ setHaveAcc }: authProps) {

    const navigate = useNavigate();

    const [_loggedIn, setLoggedIn] = useContext<contextType>(UserContext) || [];

    const [error, setError] = useState<error>({name:"", email: "", password: ""});
    const [errorMsg,setErrorMsg] = useState<string>("");
        
    const disabledSubmit : boolean = useMemo(()=>Object.values(error).some(ele=>Boolean(ele)),[error]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateName = useCallback((string:string)=>{
        if (string.includes(" ")) {
            setError(prev => ({ ...prev, name: "Please use name without empty spaces" }));
            return false;
        }else if (string.length < 3 || string.length > 20) {
            setError(prev => ({ ...prev, name: "Name must be between 3 and 20 characters" }));
            return false;
        }else{
            setError(prev => ({ ...prev, name: "" }));
            return true;
        };
    },[]);

    const validateEmail = useCallback((string:string)=>{
        if (string.includes(" ")) {
            setError(prev => ({ ...prev, email: "Please do not use empty space inside email" }));
            return false;
        }
        if (string.length < 5 || !string.includes("@") || !string.includes(".")) {
            setError(prev => ({ ...prev, email: "Please use proper email" }));
            return false;
        }else{
            setError(prev => ({ ...prev, email: "" }));
            return true;
        };
    },[]);

    const validatePassword = useCallback((string:string)=>{
        if (string.includes(" ") ) {
            setError(prev => ({ ...prev, password: "Please use password without empty spaces" }));
            return false;
        }else if (string.length < 8 || string.length > 20) {
            setError(prev => ({ ...prev, password: "Password must be between 8 and 20 characters" }));
            return false;
        }else{
            setError(prev => ({ ...prev, password: "" }));
            return true;
        };
    },[]);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setError({name:"", email: "", password: ""});
        setErrorMsg("");

        const form = e.target as HTMLFormElement;

        let errorExist = false;

        if (!validateName(form.username.value)) {
            errorExist = true;
        };
        if (!validateEmail(form.email.value)) {
            errorExist = true;
        };
        if (!validatePassword(form.password.value)) {
            errorExist = true;
        };

        if (errorExist) {
            return;
        };

        const user = {name: form.username.value, email: form.email.value, password: form.password.value}

        setIsSubmitting(true);

        onRegister({ user }).then(() => {
            navigate("/overview");
            setLoggedIn && setLoggedIn(true);
        }).catch((error) => {
            if (typeof error === "string") {
                setErrorMsg("something went wrong, please try later");
                return;
            }
            if (error?.message) {
                setErrorMsg(error.message);
            }
            setError({name:error.name || "" ,email : error.email || "", password : error.password || ""  });
        }).finally(()=>{
            setIsSubmitting(false);
        });
    }, [setLoggedIn])

    return (
        <>
                <form className={`auth-form ${isSubmitting ? "cursor-wait" : null}`}  
                           onSubmit={(e) => handleSubmit(e)}
                >
                    <h1 className='text-1 text-dark'>Sign up</h1>

                    <div className="auth-form_inputs-container">
                        <Input 
                                 type='text'
                                 id="username"
                                 placeholder='Name'
                                 error={error.name}
                                 minLength={3}
                                 onValidate={validateName}
                                  />

                        <Input 
                                 type='email'
                                 id="email"
                                 placeholder='Email'
                                 error={error.email}
                                 minLength={3}
                                 onValidate={validateEmail}
                                  />

                        <Input
                                 type='password'
                                 id="password"
                                 placeholder='Password'
                                 error={error.password}
                                 minLength={8}
                                 icon={eye}
                                 iconClassName="eye"
                                 onValidate={validatePassword}
                                  />
                        <span className="error-msg text-3">{errorMsg}</span>
                    </div>
                    <button className={`btn-primary ${(disabledSubmit || isSubmitting) ? "btn-disabled" : ""}`} type="submit" disabled={isSubmitting || disabledSubmit} title={(disabledSubmit || isSubmitting) ? "Disabled" : "Register"}>
                        <span className="text-4 text-bold">
                            Create Account
                        </span>
                    </button>

                    <span className="auth-link_text text-4 text-light">Already have an account? 
                            <span className='auth-link text-4 text-bold text-dark' onClick={() => setHaveAcc(prev => !prev)}>Login</span>
                     </span>
                </form>
        </>
    );
};
