import { React } from "react";

export const CartInfo = ({ text, info }) => {
  //toFixed(2) is to round to 2 decimals if the text is for the price
  // If is the length of the cart array, will not have the toFixed due to is always integer
  return (
    <div className="cart-info">
      {text} : {text === "Total Price" ? info.toFixed(2) : info}
    </div>
  );
};
