import React, { createContext, useState, useReducer } from "react";

// export const CartContext = createContext({
//   items: [],
//   totalAmount: 0,
//   addItem,
//   removeItem,
// });
const initialState = {
  items: [],
  totalAmount: 0,
}
const reducer =(state, action) =>{
  switch (action.type) {
    case "ADD_ITEM":
      return
      
    case "REMOVE_ITEM":
      return 
  
    default:
      return initialState;
  }
}
export const CartContext = createContext();

const addItemToCart = (item) => {};
const removeItemFromCart = (id) => {};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] =  useReducer(reducer, initialState)
  const [cartItems, setCartItems] = useState({
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  });

  // const cartContext = {
  //   items: [],
  //   totalAmount: 0,
  //   addItem: addItemToCart,
  //   removeItem: removeItemFromCart,
  // }

  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;


// if (action.type === "ADD") {
//   //state.items.concat(action.item)
//   let updatedItems;
//   // console.log(action.item);
//   const existItemIndex = state.items.findIndex(
//     (item) => item.id === action.item.id
//   );
//   if (existItemIndex !== -1) {
//     const existItem = state.items[existItemIndex];
//     existItem.amount += action.item.amount;
//     updatedItems = [...state.items];
//   } else {
//     updatedItems = [...state.items, action.item];
//   }
//   return {
//     items: updatedItems,
//     totalAmount: state.totalAmount + action.item.price * action.item.amount,
//   };
// }
// if (action.type === "REMOVE") {
// } else {
//   return initialState;
// }
// };