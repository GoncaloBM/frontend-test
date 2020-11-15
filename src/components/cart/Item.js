import { React } from "react";

export const Item = ({ title, price }) => {
  return (
    <div className="item">
      <div className="item-name">{title}</div>
      <div className="item-price">{price}</div>
    </div>
  );
};
