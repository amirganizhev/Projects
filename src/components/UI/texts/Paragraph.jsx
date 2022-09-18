import React from "react";
import classes from './Paragraph.module.css'

function Paragraph(props) {

    return (
        <p {...props} className={classes.paragraph}>
            {props.children}
        </p>
    )

}

export default Paragraph;