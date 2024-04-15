import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.css'
const root = document.getElementById('backdrop-root');

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={`${classes.backdrop} ${props.className}`}>
      {props.children}
    </div>, root);
};

export default Backdrop;