import { createContext } from "react";

const UserProgressContext = createContext({
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {}
});

export default UserProgressContext;
