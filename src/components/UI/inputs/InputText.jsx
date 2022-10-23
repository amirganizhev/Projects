import React from "react";
import classes from './InputText.module.css'

function InputText(props) {

    return (
        <div className={classes.inputText}>
            <input 
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
            />
        </div>
    )

}

export default InputText;