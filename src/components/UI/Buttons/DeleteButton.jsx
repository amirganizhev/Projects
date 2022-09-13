import React from "react";
import classes from './DeleteButton.module.css'

function DeleteButton(props) {

    return (
        <button {...props} className={classes.deleteButton}>
            <span>{props.children}</span>
        </button>
    )

}

export default DeleteButton;