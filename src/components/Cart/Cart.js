import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal onClickBackdrop={props.onCloseCart}>
      {"cartitems"}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
