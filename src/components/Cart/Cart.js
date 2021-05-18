import React, { useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../UseContext/CartContext";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";
// import Checkout from "./Checkout";

const Cart = ({ onCloseCart }) => {
  const history = useHistory();
  const cartContext = useContext(CartContext);
  const totalPrice = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const addItemHandler = (item) => {
    // console.log(item);
    const { id, price, name } = item;
    const addedItem = {
      id,
      price,
      name,
      amount: 1,
    };

    cartContext.addItem(addedItem);
  };
  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const handleClickOrderBtn = () => {
    history.push("/checkout");
    onCloseCart();
  };
  const cardItems = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          // onAdd={addItemHandler.bind(null, item)}
          onAdd={addItemHandler}
          onRemove={removeItemHandler}
          // onRemove={removeItemHandler.bind(null,id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={onCloseCart}>
      {cardItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalPrice}</span>
        {/* <Checkout /> */}
      </div>
      <div className="actions">
        <button onClick={onCloseCart} className="button--alt">
          Close
        </button>
        {hasItems && (
          <button onClick={handleClickOrderBtn} className="button">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
