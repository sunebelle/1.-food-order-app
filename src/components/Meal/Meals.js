import React from "react";
import Ready from "./Ready";
import Sumary from "./Sumary";

const Meals = ({ handleAddMealShown }) => {
  return (
    <div>
      <Sumary />
      <Ready  />
    </div>
  );
};

export default Meals;
