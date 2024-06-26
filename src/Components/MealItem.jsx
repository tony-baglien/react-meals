import { useContext } from "react";
import currencyFormatter from "../utils/currencyFormatter.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }
  return (
    <li className="meal-item">
      <article>
        <div>
          <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add To Cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
