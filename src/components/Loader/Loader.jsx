import React from "react";
import classes from './Loader.module.css'

function Loader() {

    return (
        <div className={classes.loaderMask}>
            <div className={classes.waitingMan}>
                <div className={classes.waitingMan__hands}></div>
                <div className={classes.waitingMan__body}></div>
                <div className={classes.waitingMan__head}>
                    <div className={classes.waitingMan__headEye}></div>
                </div>
            </div>
            <div className={classes.loaderHeader}>Loading . . . </div>
            <div className={classes.progressBar}>
                <div className={classes.progressBar__value}></div>
            </div>
        </div>
    )

}

export default Loader;