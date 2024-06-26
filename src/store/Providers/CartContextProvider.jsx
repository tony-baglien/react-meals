import { useReducer } from "react";
import CartContext from "../CartContext";
import CartReducer from "../Reducers/CartReducer.jsx";

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }
  function removeItem(item) {
    dispatchCartAction({ type: "REMOVE_ITEM", item });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART"})
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
