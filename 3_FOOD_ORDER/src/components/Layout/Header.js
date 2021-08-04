import React from 'react';
import classes from './Header.module.css';
import image from '../../meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeal</h1>
                <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt="A table full of delicious food!" />
            </div>

      </>      
    );
}

export default Header;