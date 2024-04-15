import React from 'react';
import classes from './FilterMeals.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const FilterMeals = (props) => {
  const inputChangeHandler = (e)=> {
    const keyWord = e.target.value.trim();
    props.onFilter(keyWord);
  }
  return (
    <div className={classes.filterMeals}>
      <div className={classes.searchWrapper}>
        <input onChange={inputChangeHandler} className={classes.searchInput} type="text" placeholder='请输入关键字'></input>
        <FontAwesomeIcon className={classes.searchIcon} icon={faSearch}></FontAwesomeIcon>
      </div>
      
    </div>
  );
};

export default FilterMeals;