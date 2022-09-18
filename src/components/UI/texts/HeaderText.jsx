import React from "react";
import classes from './HeaderText.module.css'

function HeaderText(props) {

    return (
        <h2 {...props} className={classes.headerText}>{props.children}</h2>
    )

}

export default HeaderText;