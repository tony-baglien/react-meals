import currencyFormatter from "../utils/currencyFormatter.js";
const CartItem = ({
  onAddItem,
  onRemoveItem,
  id,
  name,
  quantity,
  price,
}) => {
  return (
    <li key={id} className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onRemoveItem}>-</button>
        <span>{quantity}</span>
        <button onClick={onAddItem}>+</button>
      </p>
    </li>
  );
};

export default CartItem 
