import { Card } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../UseContext/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const history = useHistory();
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const cartContext = useContext(CartContext);
  const { clearCart, addUserInfo } = cartContext;

  const { name, address, phone, email } = customer;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ customer, [name]: value, id: Date.now() });
  };

  const handleSubmitUserInfo = (e) => {
    e.preventDefault();
    addUserInfo(customer);
    clearCart();
    history.replace("/");
  };

  const handleCancelUserInfo = () => {
    clearCart();
    history.replace("/");
  };

  return (
    <div className="checkout__main">
      <Card>
        <form className="checkout__form">
          <div className="input__value">
            <label>Your Name </label>
            <input
              type="text"
              value={name}
              required
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="input__value">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              value={phone}
              required
              min="9"
              onChange={handleChange}
            />
          </div>
          <div className="input__value">
            <label> Email </label>
            <input
              type="email"
              required
              onChange={handleChange}
              value={email}
              min="6"
              name="email"
            />
          </div>
          <div className="input__value">
            <label> Address </label>
            <input
              type="text"
              required
              onChange={handleChange}
              value={address}
              name="address"
            />
          </div>
          <div className="addMeals__BtnCenter">
            <button
              type="submit"
              onSubmit={handleSubmitUserInfo}
              className="addMeal__btn"
            >
              Confirm
            </button>
            <button
              onClick={handleCancelUserInfo}
              className="addMeal__cancel"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Checkout;
