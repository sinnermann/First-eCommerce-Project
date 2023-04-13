import React from "react";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
  ADD_TO_CART,
  DECREASE_CART,
  CLEAR_CART,
} from "../../redux/slice/cartSlice";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Card from "../../components/card/Card";
import { REMOVE_FROM_CART } from "../../redux/slice/cartSlice";
import { CALCULATE_SUBTOTAL } from "../../redux/slice/cartSlice";
import { useEffect } from "react";
import { CALCULATE_TOTAL_QUANTITY } from "../../redux/slice/cartSlice";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { SAVE_URL } from "../../redux/slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  const increaseCart = (cart) => {
    dispatch(ADD_TO_CART(cart));
  };
  const decreaseCart = (cart) => {
    dispatch(DECREASE_CART(cart));
  };

  const removeFromCart = (cart) => {
    dispatch(REMOVE_FROM_CART(cart));
  };

  const clearCart = () => {
    dispatch(CLEAR_CART());
  };

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
    dispatch(SAVE_URL(""));
  }, [cartItems, dispatch]);

  const url = window.location.href;

  const checkout = () => {
    if (isLoggedIn) {
      navigate("/checkout-details");
    } else {
      dispatch(SAVE_URL(url));
      navigate("/login");
    }
  };

  return (
    <section>
      <div className={`container ${styles.table}`}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <>
            <p>Your Cart is Empty.</p>
            <br />
            <div>
              <Link to="/#products">&larr; Continue Shopping</Link>
            </div>
          </>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cart, index) => {
                  const { id, name, price, imageURL, cartQuantity } = cart;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>
                        <p>
                          <b>{name}</b>
                        </p>
                        <img
                          src={imageURL}
                          alt={name}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>{price}</td>
                      <td>
                        <div className={styles.count}>
                          <button
                            className="--btn"
                            onClick={() => decreaseCart(cart)}
                          >
                            -
                          </button>
                          <p>
                            <b>{cartQuantity}</b>
                          </p>
                          <button
                            className="--btn"
                            onClick={() => increaseCart(cart)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{(price * cartTotalQuantity).toFixed(2)}</td>
                      <td className={styles.icons}>
                        <FaTrashAlt
                          size={19}
                          color="red"
                          onClick={() => removeFromCart(cart)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={styles.summary}>
              <button className="--btn --btn-danger" onClick={clearCart}>
                Clear Cart
              </button>
              <div className={styles.checkout}>
                <div>
                  <Link to="/#products">&larr; Continue Shopping</Link>
                </div>
                <br />
                <Card cardClass={styles.card}>
                  <p>
                    <b>{`Cart Item(s): ${cartTotalQuantity}`}</b>
                  </p>
                  <div className={styles.text}>
                    <h4>SubTotal:</h4>
                    <h3>{`$${cartTotalAmount.toFixed(2)}`}</h3>
                  </div>
                  <p>Tax an Shipping calculated at checkout</p>
                  <button
                    className="--btn --btn-primary --ntn-block"
                    onClick={checkout}
                  >
                    Checkout
                  </button>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
