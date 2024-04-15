import React, {useContext} from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import CartContext from '../../../store/cart-context';

const Counter = (props) => {

  const ctx = useContext(CartContext)

  const addButtonHandler = () => {
    ctx.addItem(props.meal);
  }
  const subButtonHandler = () => {
    ctx.subItem(props.meal);
  }
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
        props.meal.amount && props.meal.amount !== 0 ? (<>
          <button className={classes.sub} onClick={subButtonHandler}><FontAwesomeIcon icon={faMinus}/></button>
          <span className={classes.count}>{props.meal.amount}</span>
        </>) : null
      }
      <button onClick={addButtonHandler} className={classes.add}><FontAwesomeIcon icon={faPlus}/></button>
    </div>
  );
};

export default Counter;