import { createContext } from "react";

const CartContext = createContext({
  totalItems: 0,
  items: {},
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  purchaseHandler: () => {},
});

export default CartContext;
