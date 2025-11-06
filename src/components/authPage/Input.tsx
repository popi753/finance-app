import { changeVisibility } from '../../utils/changeVisibility';

import '../../styles/authPage/input.css'

type inputProps = {
    type: string;
    id: string;
    placeholder: string;
    required: boolean;
    error: string;
    minLength?: number;
    icon?: string;
    iconClassName?: string;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
}


export default function Input({ type, id, placeholder, required, minLength, error, icon, iconClassName, value, setValue }: inputProps) {

    return (
        <>
            <div className="input-wrapper">

                <label htmlFor={id} className={"auth-label text-5"}>{placeholder}</label>
                <input
                    value={value}
                    onChange={(e) => setValue && setValue(e.target.value)}
                    autoComplete='off'
                    minLength={minLength}
                    type={type}
                    name={id} id={id}
                    placeholder={`Please enter your ${placeholder}`}
                    required={required}
                    className={`auth-input ${error ? "input-error" : ""}`}
                />
                {(type === "password" && icon && iconClassName) ? <div className='icon-wrapper-s' onClick={(e) => changeVisibility(e)}>
                    <img className={iconClassName} src={icon} alt="Toggle password visibility" />
                </div> : null}
                <span className="error-msg text-5">{error}</span>
            </div>

        </>
    )
}




