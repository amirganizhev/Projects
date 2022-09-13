import React from "react";
import classes from './AddButton.module.css'

function AddButton(props) {

    return (
        <button {...props} className={classes.addButton}>
            <span>{props.children}</span>
        </button>
    )

}

export default AddButton;