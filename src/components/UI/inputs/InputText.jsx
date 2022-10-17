import { useRef } from "react";
import classes from './InputText.module.css'

function InputText(props) {

    const inputValue = useRef();

    document.onclick = function(e) {
        if (e.target.type !== "text" && inputValue.current.value !== '') {
            setTimeout(() => {
                inputValue.current.value = '';
            }, 100);
        }
    }

    return (
        <div className={classes.inputText}>
            <input 
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                ref={inputValue}
            />
            <label>{props.label}</label>
        </div>
    )

}

export default InputText;