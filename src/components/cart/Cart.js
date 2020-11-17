import { React, useState, useEffect } from "react";
import "./Cart.css";
import { Item } from "./Item";
import { CartInfo } from "./CartInfo";
import { Title } from "../common/Title";

export const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectItems, setSelectItems] = useState(0);

  const sumPrice = () => {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price;
    }
    setTotalPrice(total);
  };

  useEffect(() => {
    setSelectItems(cart.length);
    sumPrice();
  }, [cart]);

  return (
    <div className="cart-view">
      <Title title="Cart" size="3vw" />
      <div className="cart">
        {cart &&
          cart.map((item, index) => {
            return <Item key={index} title={item.title} price={item.price} />;
          })}
      </div>
      <CartInfo text={"Books Selected"} info={selectItems} />
      <CartInfo text={"Total Price"} info={totalPrice} />
    </div>
  );
};
