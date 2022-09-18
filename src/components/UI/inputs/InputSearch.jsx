import React from "react";
import classes from './InputSearch.module.css'

function InputSearch() {

    return (
        <div className={classes.inputSearch}>
            <input type="text" id="input-search"/>
            <label htmlFor="input-search"></label>
        </div>
    )

}

export default InputSearch;