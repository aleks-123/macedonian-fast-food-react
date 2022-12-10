import React, { createContext } from "react";

const CartContext = createContext({
  imtes: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
