import React from "react";
import classes from './ImportantText.module.css'

function ImportantText(props) {

    return (
        <span {...props} className={classes.importantText}>
            {props.children}
        </span>
    )

}

export default ImportantText;