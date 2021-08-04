import React, { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';
const Cart = (props) => {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  
  const cartCtx = useContext(CartContext);
  const [isCheckout, setCheckout] = useState('')
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hashItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  }
  const orderHandler = () => {
    setCheckout(true);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  const modalActions = (
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hashItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
  );
  const sumbitOrderHandler = async(userData) => {
    setIsSubmitting(true);
    const res = await fetch('https://react-meals-68482-default-rtdb.firebaseio.com/order.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderItems:cartCtx.items,
        }),
        
      })
    
    const data = await res.json();
    
    setIsSubmitting(false);
    setDidSubmit(true);
    // cartCtx.clearCart();
}
const cartModalContent = (
  <React.Fragment>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isCheckout && (
      <Checkout onConfirm={sumbitOrderHandler} onCancel={props.onClose} />
    )}
    {!isCheckout && modalActions}
  </React.Fragment>
);

const isSubmittingModalContent = <p>Sending order data...</p>;

const didSubmitModalContent = (
  <React.Fragment>
    <p>Successfully sent the order!</p>
    <div className={classes.actions}>
    <button className={classes.button} onClick={props.onClose}>
      Close
    </button>
  </div>
  </React.Fragment>
);
  
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      { isSubmitting && isSubmittingModalContent}
      {
        !isSubmitting && didSubmit && didSubmitModalContent
      }
    </Modal>
  );
};

export default Cart;