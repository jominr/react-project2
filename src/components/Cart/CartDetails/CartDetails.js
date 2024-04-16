import React, {useContext, useState} from 'react';
import classes from './CartDetails.module.css';
import CartContext from '../../../store/cart-context';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Meal from '../../Meals/Meal/Meal';
import Confirm from '../../UI/Confirm/Confirm';

const CartDetails = () => {
  const ctx = useContext(CartContext);
  const [showConfirm, setShowConfirm] = useState(false);
  const showConfirmHander = ()=> {
    setShowConfirm(true);
  }

  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };

  const okHandler = (e) => {
      // 清空购物车
      // ctx.clearCart();
      ctx.cartDispatch({type:'clearCart'})
  };

  return (
    <Backdrop>
      
      {showConfirm && <Confirm
        onCancel={cancelHandler}
        onOk={okHandler}
      >确认清空吗？</Confirm>}
      <div 
        className={classes.cartDetailds}
        onClick={e => e.stopPropagation()}
      >
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐品详情</h2>
          <div onClick={showConfirmHander} className={classes.Clear}>
              <FontAwesomeIcon icon={faTrash}/>
              <span>清空购物车</span>
          </div>
        </header>

        <div className={classes.MealList}>
          {
            ctx.items.map(item => <Meal noDesc key={item.id} meal={item}></Meal>)
          }
        </div>


      </div>
      
    </Backdrop>
  );
};

export default CartDetails;