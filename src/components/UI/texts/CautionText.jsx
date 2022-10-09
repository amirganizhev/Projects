import React from "react";
import classes from './CautionText.module.css'

function CautionText(props) {

    return (
        <span {...props} className={classes.cautionText}>
            {props.children}
        </span>
    )

}

export default CautionText;