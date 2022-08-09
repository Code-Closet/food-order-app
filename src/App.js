import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible((flag) => !flag);
  };

  return (
    <Fragment>
      {isCartVisible && <Cart onCloseCart={toggleCart} />}
      <Header onCartClik={toggleCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
