import React, { createContext, useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
  userInfo: [],
};
const reducer = (state, action) => {
  let updatedItems;
  switch (action.type) {
    case "ADD":
      // console.log(action.item);
      const existItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      if (existItemIndex !== -1) {
        const existItem = state.items[existItemIndex];
        existItem.amount += action.item.amount;
        updatedItems = [...state.items];
      } else {
        updatedItems = [...state.items, action.item];
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };

    case "REMOVE":
      // let updatedItem;
      const cartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const cartItemExist = state.items[cartItemIndex];
      const updatedAmount = state.totalAmount - cartItemExist.price;
      if (cartItemExist.amount === 1) {
        const filteredItems = state.items.filter(
          (item) => item.id !== action.id
        );
        updatedItems = filteredItems;
      } else {
        cartItemExist.amount--;
        updatedItems = [...state.items];
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    case "ADD_USERS":
      return {
        ...state,
        userInfo: [...state, action.info],
      };

    case "CLEAR":
      return {
        items: [],
        totalAmount: 0,
        userInfo: null,
      };

    default:
      return initialState;
  }
};
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);
  const addItemToCart = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };
  const addUserInfo = (userInfo) => {
    dispatch({ type: "ADD_USERS", info: userInfo });
  };

  const cartItems = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart,
    addUserInfo,
  };

  return (
    <CartContext.Provider value={cartItems}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
