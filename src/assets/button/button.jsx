import s from './button.module.css';

import PropTypes from 'prop-types';


function Button({style, handleClick, param, children}) {

    Button.propTypes = {
        style: PropTypes.string,
        handleClick: PropTypes.func,
        param: PropTypes.shape(
            {
                answerText: PropTypes.string.isRequired,
                isCorrect: PropTypes.bool,
            }
        ),        
        children: PropTypes.string.isRequired,
    }

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