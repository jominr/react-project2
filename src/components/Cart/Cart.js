import React, {useContext, useState, useEffect} from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';

const Cart = () => {

    const ctx = useContext(CartContext);
    const [showDetails, setShowDetails] = useState(false);
    const cartDetailsHander = () => {
      if (ctx.totalAmount === 0) {
        setShowDetails(false);
      } else {
        setShowDetails(preState => !preState);
      }
    }
    useEffect(()=> {
      if (ctx.totalAmount === 0) {
        setShowDetails(false);
      }
    }, [ctx.totalAmount])

    return (
        <div className={classes.Cart} onClick={cartDetailsHander}>

            {showDetails && <CartDetails />}

            <div className={classes.Icon}>
                <img src={iconImg}/>
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>

            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}

            <button className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
        </div>
    );
};

export default Cart;
