import React from "react";
import "./Header.css";
import mealImg from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";
import { useHistory } from "react-router";

const Header = ({ onShowCart }) => {
  const history = useHistory();
  const handleClickHomePage = () => {
    history.push("/");
  };
  return (
    <>
      <header className="header">
        <h1 onClick={handleClickHomePage}> React Meal</h1>
        <HeaderButton onShowCart={onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealImg} alt="mealImg" />
      </div>
    </>
  );
};

export default Header;
