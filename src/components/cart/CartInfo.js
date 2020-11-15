import { React } from "react";

export const CartInfo = ({ text, info }) => {
  return (
    <div className="cart-info">
      {text} : {info}
    </div>
  );
};
