import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  const { items } = cartCtx;
  const [btnHighlighting, setBtnHighlighting] = useState(false);
  const btnClasses = `${classes.button} ${btnHighlighting ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnHighlighting(true);
    const timer = setTimeout(() => {
      setBtnHighlighting(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClickCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfItems} </span>
    </button>
  );
};

export default HeaderCartButton;
