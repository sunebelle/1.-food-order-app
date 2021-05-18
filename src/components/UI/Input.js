import React from "react";
import "./Input.css";

const Input = React.forwardRef(({input, label},ref) => {
  return (
    <div className="input">
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input}/>
    </div>
  );
});

export default Input;
