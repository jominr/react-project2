import React, {useContext, useState, useEffect} from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout'

const Cart = () => {

    const ctx = useContext(CartContext);
    const [showDetails, setShowDetails] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

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
        setShowCheckout(false);
      }
    }, [ctx])

    const showCheckoutHandler = () => {
      if(ctx.totalAmount === 0) return;
      setShowCheckout(true);
    };

    const hideCheckoutHandler = () => {
      setShowCheckout(false);
    };

    return (
        <div className={classes.Cart} onClick={cartDetailsHander}>

            {showCheckout && <Checkout onHide={hideCheckoutHandler}/>}

            {showDetails && <CartDetails />}

            <div className={classes.Icon}>
                <img src={iconImg}/>
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>

            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}

            <button
              onClick={showCheckoutHandler}
              className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
        </div>
    );
};

export default Cart;
