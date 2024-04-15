import React, {useState, useEffect} from 'react';
import classes from './FilterMeals.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const FilterMeals = (props) => {

  const [keyword, setKeyword] = useState('');

  const inputChangeHandler = (e)=> {
    setKeyword(e.target.value.trim());
    
  }

  useEffect(()=> {
    // Effect回调函数中，可以指定一个函数作为返回值。
    // 这个函数可以称其为清理函数，它会在下次Effect执行前调用。
    // 可以在这个函数中清除上次Effect执行所带来的影响。
    const timer = setTimeout(() =>{
      props.onFilter(keyword);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [keyword])

  return (
    <div className={classes.filterMeals}>
      <div className={classes.searchWrapper}>
        <input 
          value={keyword}
          onChange={inputChangeHandler}
          className={classes.searchInput}
          type="text"
          placeholder='请输入关键字'>
        
        </input>
        <FontAwesomeIcon className={classes.searchIcon} icon={faSearch}></FontAwesomeIcon>
      </div>
      
    </div>
  );
};

export default FilterMeals;