import React, { useContext } from "react";
import { CartContext } from "../../UseContext/CartContext";
import MealForm from "./MealForm";
import "./MealItem.css";

const MealItem = ({ meal }) => {
  const cartContext = useContext(CartContext);
  const { name, description, price, id } = meal;
  const priceFormat = `$${Number(price).toFixed(2)}`;

  const handleAddItem = (amount) => {
    // console.log(cartContext);
    cartContext.addItem({
      id,
      name,
      price,
      amount,
    });
  };

  return (
    <li className="meal">
      <div>
        <h3> {name}</h3>
        <div className="description"> {description}</div>
        <div className="price">{priceFormat}</div>
      </div>
      <div>
        <MealForm onAddCartItem={handleAddItem} />
      </div>
    </li>
  );
};

export default MealItem;
