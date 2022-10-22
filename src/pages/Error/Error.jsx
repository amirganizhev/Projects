import React from "react";
import classes from "./Error.module.css"

import ErrorImage from '../../images/error.png';

function Error() {

    return (
        <div className={classes.error}>
            <img src={ErrorImage} alt="Ошибка"/>
        </div>
    )

}

export default Error;