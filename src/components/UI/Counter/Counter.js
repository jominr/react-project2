import React from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  return (
    <div className={classes.counter}>
      {/* {
        props.amount && props.amount !== 0 ? (<>
          <button className={classes.sub}><span>-</span></button>
          <span className={classes.count}>{props.amount}</span>
        </>) : null
      }
      <button className={classes.add}><span>+</span></button> */}


      {
        props.amount && props.amount !== 0 ? (<>
          <button className={classes.sub}><FontAwesomeIcon icon={faMinus}/></button>
          <span className={classes.count}>{props.amount}</span>
        </>) : null
      }
      <button className={classes.add}><FontAwesomeIcon icon={faPlus}/></button>
    </div>
  );
};

export default Counter;