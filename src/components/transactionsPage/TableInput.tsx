import '../../styles/table-input.css'

type inputProps = {
    type: string;
    id: string;
    placeholder: string;
    label?: string;
    options?: string[];
    icon?: string;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    onSearch?: () => void;
}


export default function Input({ type, id, placeholder, label, options, icon, value, setValue, onSearch }: inputProps) {

    return (
        <>
            <div className="table-input-wrapper">

                {label && <label htmlFor={id} className={"table-label text-4"}>{label}</label>}

                {type === "select" ? 
                        <select 
                                className="table-input"
                                name={id} id={id}
                                // defaultValue={placeholder}
                                value={value}
                                onChange={e => setValue && setValue(e.target.value)}>
                                    
                                {options?.map((option) => {
                                    return <option key={option} value={option}>{option}</option>
                                })}
                                

                        </select> 
                                : 
                        <input
                            value={value}
                            onChange={(e) => setValue && setValue(e.target.value)}
                            autoComplete='off'
                            type={type}
                            name={id} id={id}
                            placeholder={`${placeholder}`}
                            className="table-input"/>
                }
                {icon ? <div className='icon-wrapper-s' onClick={() => onSearch && onSearch()}>
                    <img  src={icon} alt="Toggle password visibility" />
                </div> : null}
            </div>

        </>
    )
}




