import { useContext } from "react";
import currencyFormatter from "../utils/currencyFormatter.js";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  let cartPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  const handleCartExit = () => {
    userProgressCtx.hideCart();
  };

  const handleCheckoutEnter = () => {
    userProgressCtx.showCheckout();
  };
  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCartExit : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onAddItem={() => cartCtx.addItem(item)}
              onRemoveItem={() => cartCtx.removeItem(item)}
            />
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter(cartPrice)}</p>
      <div className="modal-actions">
        <Button textOnly onClick={handleCartExit}>
          Close
        </Button>
        <Button onClick={handleCheckoutEnter}>Go to Checkout</Button>
      </div>
    </Modal>
  );
};

export default Cart;
