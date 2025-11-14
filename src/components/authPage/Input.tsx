import { useCallback, useState } from 'react';

import { changeVisibility } from '../../utils/changeVisibility';

import '../../styles/authPage/input.css'

type inputProps = {
    type: string;
    id: string;
    placeholder: string;
    error: string;
    minLength?: number;
    icon?: string;
    iconClassName?: string;
    onValidate: (value: string) => boolean;      
}

export default function Input({ type,
                                id,
                                placeholder,
                                error,
                                minLength,
                                icon,
                                iconClassName,
                                onValidate}: inputProps) {

    const [success,setSuccess] = useState(false);

    const changeEventFunc = useCallback((e : React.ChangeEvent<HTMLInputElement>)=>{
            onValidate(e.target.value) ? setSuccess(true) : setSuccess(false); 
    },[onValidate])

    return (
            <div className="input-wrapper">

                <label htmlFor={id} className="text-5 text-light">{placeholder}</label>
                <input
                    onChange={changeEventFunc}
                    onBlur  ={changeEventFunc}
                    autoComplete='off'
                    minLength={minLength}
                    type={type}
                    name={id} id={id}
                    placeholder={`Please enter your ${placeholder}`}
                    required
                    className={`auth-input text-dark ${error ? "input-error" : success ?  "input-success" : ""}`}
                />
                {(type === "password" && icon && iconClassName) ? <div className='icon-wrapper-s' onClick={(e) => changeVisibility(e)}>
                    <img className={iconClassName} src={icon} alt="Toggle password visibility" />
                </div> : null}
                <span className="error-msg text-5">{error}</span>
            </div>
    )
}




