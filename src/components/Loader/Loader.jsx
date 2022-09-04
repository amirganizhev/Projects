import React, { useRef } from "react";
import classes from './Loader.module.css'

function Loader() {

    const loaderVisible = useRef();

    window.onload = function() {
        /*
        setTimeout(() => {
            loaderVisible.current.style.display = 'none';
        }, 2000);
        */
    }

    return (
        <div className={classes.loaderMask} ref={loaderVisible}>
            <div className={classes.circ}>
                <div className={classes.hands}></div>
                <div className={classes.body}></div>
                <div className={classes.head}>
                    <div className={classes.eye}></div>
                </div>
            </div>
            <div className={classes.load}>Loading . . . </div>
            <div className={classes.progress}>
                <div className={classes.progressValue}></div>
            </div>
        </div>
    )

}

export default Loader;