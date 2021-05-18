import React, { useState } from "react";
import "./AddMeal.css";
import axios from "axios";
const AddMeal = ({ onAdd, onClose }) => {
  const [meal, setMeal] = useState({ name: "", description: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal({ ...meal, [name]: value, id: Date.now() });
  };

  const getPost = () => {
    axios
      .post(
        "https://react-hooks26-default-rtdb.firebaseio.com/addMeal.json",
        meal
      )
      .then((response) => {
        // console.log(response);
        if (response.status !== 200) {
          throw new Error("something went wrong");
        }
      })
      .catch((err) => {
        throw err.message;
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPost(meal);
    onAdd(meal);
    setMeal({ name: "", description: "", price: "" });
    onClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form__addMeal">
        <div className="input__value">
          <label>Name </label>
          <input
            type="text"
            value={meal.name}
            required
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="input__value">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={meal.description}
            required
            onChange={handleChange}
          />
        </div>
        <div className="input__value">
          <label> Price</label>
          <input
            type="number"
            required
            onChange={handleChange}
            step="any"
            value={meal.price}
            name="price"
          />
        </div>
        <div className="addMeals__BtnCenter">
          <button className="addMeal__btn" type="submit">
            Add Meal
          </button>
          <button className="addMeal__cancel" type="submit" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddMeal;
