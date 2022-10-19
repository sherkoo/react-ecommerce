import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Cart.styles';
import Container from '../../Container/Container';

const Cart = (props) => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    var cart = JSON.parse(localStorage.getItem('cart'));
    if(cart){
      setCartItems(cart.items)
    }
  },[]);

  const getCartItems = () => {
    if(cartItems.length > 0){
      return (
        <div>
          {cartItems.map((i,index) => (
        <div>
          {i.title}
          {i.price}
        </div>
      ))}
        </div>
      )
    } else {
      return 'nothing in cart'
    }
  }

  return (
    <div className="CartWrapper">
    <Container>
      <h1>Cart</h1>
      {getCartItems()}
    </Container>
  </div>
  )
};

Cart.propTypes = {
  // bla: PropTypes.string,
};

Cart.defaultProps = {
  // bla: 'test',
};

export default Cart;
