import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Cart.styles';
import Container from '../../Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal, emptyCart } from '../../../Redux/cart';

/**
 * Cart
 */
const Cart = (props) => {

  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // const getCartItems = () => {
  //   if(cartItems.length > 0){
  //     return (
  //       <div>
  //         {cartItems.map((i,index) => (
  //           <div>
  //             {i.title}
  //             {i.price}
  //           </div>
  //         ))}
  //       </div>
  //     )
  //   } else {
  //     return 'nothing in cart'
  //   }
  // }

  useEffect(() => {
    var cart = JSON.parse(localStorage.getItem('cart'));

    if(cart){
      setCartItems(cart.items)
      dispatch(getCartTotal());
      // getCartItems()
    }
  },[dispatch]);

  const renderItemsInCart = () => {

    if(cart.items.length > 0){
      return (
        <div>
          {cart.items.map((i, index) => (
            <div>{i.title}</div>
          ))}
        </div>
      )
    } else {
      return (
        <div>cart is empty</div>
      )
    }
  }

  return (
    <div className="CartWrapper">
    <Container>
      <h1>Cart</h1>
      {renderItemsInCart()}
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      <div>
        <h3>Total</h3>
        ${cart.total}
        
      </div>
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
