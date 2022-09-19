import React from "react";
import classes from './Anchor.module.css'

function Anchor(props) {

    return (
        <a {...props} className={classes.anchor} target="_blank">{props.children}</a>
    )

}

export default Anchor;