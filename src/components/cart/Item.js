import { React } from "react";

// This component will receive the title and the price and it will be displayed in the Cart View
export const Item = ({ title, price }) => {
  return (
    <div className="item">
      <div className="item-name">{title}</div>
      <div className="item-price">{price}</div>
    </div>
  );
};
