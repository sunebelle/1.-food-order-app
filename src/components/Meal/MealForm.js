import React, { useRef, useState } from "react";
import "./MealForm.css";
import Input from "../UI/Input";

const MealForm = ({onAddCartItem}) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    // console.log(enteredAmount.trim());
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
    }
    onAddCartItem(enteredAmountNumber);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          type: "text",
          id: "amount",
          min: "1",
          max: " 5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit"> + Add</button>
      {!isAmountValid && <p> Please enter a valid amount</p>}
    </form>
  );
};

export default MealForm;
