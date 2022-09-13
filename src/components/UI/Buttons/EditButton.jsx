import React from "react";
import classes from './EditButton.module.css'

function EditButton(props) {

    return (
        <button {...props} className={classes.editButton}>
            <span>{props.children}</span>
        </button>
    )

}

export default EditButton;