import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as Style from "./Cart.styles";
import Container from "../../Container/Container";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal, emptyCart } from "../../../Redux/cart";

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
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      setCartItems(cart.items);
      // dispatch(getCartTotal());
      // getCartItems()
    }
  }, [dispatch]);

  const renderItemsInCart = () => {
    if (cart.items.length > 0) {
      return (
        <div>
          {cart.items.map((i, index) => (
            <Style.CartItem>
              <h3>{i.title}</h3>
              <div>Qty: </div>
              <div>${i.price}</div>
            </Style.CartItem>
          ))}
        </div>
      );
    } else {
      return <div>cart is empty</div>;
    }
  };

  return (
    <Container>
      <Style.CartContainer>
        <div>
          <h1>Cart</h1>
          {renderItemsInCart()}
          <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
        </div>
        <Style.CartOrderSummary>
          <h3>Total</h3>${cart.total}
        </Style.CartOrderSummary>
      </Style.CartContainer>
    </Container>
  );
};

Cart.propTypes = {
  // bla: PropTypes.string,
};

Cart.defaultProps = {
  // bla: 'test',
};

export default Cart;
