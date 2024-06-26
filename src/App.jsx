import Header from "./Components/Header.jsx";
import Meals from "./Components/Meals.jsx";
import Cart from "./Components/Cart.jsx";
import Checkout from "./Components/Checkout.jsx";
import CartContextProvider from "./store/Providers/CartContextProvider.jsx";
import UserProgressProvider from "./store/Providers/UserProgressProvider.jsx";
function App() {
  return (
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
