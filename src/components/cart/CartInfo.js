import { React } from "react";

export const CartInfo = ({ text, info }) => {
  return (
    <div className="cart-info">
      {text} : {text === "Total Price" ? info.toFixed(2) : info}
    </div>
  );
};
