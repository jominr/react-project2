import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import classes from './Confirm.module.css';

const Confirm = (props) => {
    return (
        <Backdrop className={classes.ConfirmOuter}>
            <div className={classes.Confirm}>
                <p className={classes.ConfirmText}>{props.children}</p>

                <div>
                    <button
                        onClick={(e)=>{props.onCancel(e)}}
                        className={classes.Cancel}>取消</button>
                    <button
                        onClick={(e)=>{props.onOk(e)}}
                        className={classes.Ok}>确认</button>
                </div>
            </div>
        </Backdrop>
    );
};

export default Confirm;
