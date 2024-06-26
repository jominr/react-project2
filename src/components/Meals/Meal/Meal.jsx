import React from 'react';
import classes from './Meal.module.css';
import Counter from '../../UI/Counter/Counter'

const Meal = (props) => {
  const {meal: {img, title, desc, price}} = props;
  return (
    <div className={classes.meal}>
      <div className={classes.imgBox}>
        <img src={img} alt="汉堡包" />
      </div>
    
      <div className={classes.contentBox}>
        <h2 className={classes.title}>{title}</h2>
        {props.noDesc ? null : <p className={classes.description}>{desc}</p>}
        <div className={classes.priceWrap}>
          <span className={classes.price}>{price}</span>
          <Counter
            meal={props.meal}
          ></Counter>
        </div>
      </div>
    </div>
  );
};

export default Meal;