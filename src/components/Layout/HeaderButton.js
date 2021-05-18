import React, { useContext, useState, useEffect } from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./HeaderButton.css";
import { CartContext } from "../../UseContext/CartContext";

const HeaderButton = ({ onShowCart }) => {
  const [isBtnAnimated, setIsBtnAnimated] = useState(false);
  const cartItems = useContext(CartContext);
  const { items } = cartItems;
  const numberOfCartItems = items.reduce(
    (accumulator, item) => accumulator + item.amount,
    0
  );
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnAnimated(true);
    const timer = setTimeout(() => setIsBtnAnimated(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const animation = `button ${isBtnAnimated && "bump"}`;
  return (
    <button className={animation} onClick={onShowCart}>
      <span className="icon">
        <ShoppingBasketIcon />
      </span>
      <span>Your Cart </span>
      <span className="badge"> {numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
