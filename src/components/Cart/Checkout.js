import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
const isValid = (value) => value.trim() !== "";
const isPostalCode = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const styleClass = (validtity) =>
    `${classes.control} ${validtity ? "" : classes.invalid}`;
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postRef = useRef();
  const cityRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const postalCode = postRef.current.value;
    const city = cityRef.current.value;

    const isNameValid = isValid(name);
    const isStreetValid = isValid(street);
    const isCityValid = isValid(city);
    const isPostalCodeValid = isPostalCode(postalCode);
    setFormInputValidity({
      name: isNameValid,
      street: isStreetValid,
      postalCode: isPostalCodeValid,
      city: isCityValid,
    });

    const isFormValid =
      isNameValid && isStreetValid && isCityValid && isPostalCodeValid;
    if (!isFormValid) return;
    props.onConfirm({
      name: name,
      street: street,
      city: city,
      postalCode: postalCode,
    });
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={styleClass(formInputValidity.name)}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={styleClass(formInputValidity.street)}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValidity.street && <p>Please enter a valid street name.</p>}
      </div>
      <div className={styleClass(formInputValidity.postalCode)}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postRef} />
        {!formInputValidity.postalCode && (
          <p>Please enter a valid postal code.</p>
        )}
      </div>
      <div className={styleClass(formInputValidity.city)}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
