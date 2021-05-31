import s from './button.module.css';


function Button({style, handleClick, param, children}) {
    return (   
        <button 
            className={`${s.btn} ${style}`}
            onClick={() => handleClick(param)}
        >
            {children}
        </button>
    )      
}

export default Button;