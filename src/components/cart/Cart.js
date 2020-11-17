import { React, useState, useEffect } from "react";
import "./Cart.css";
import { Item } from "./Item";
import { CartInfo } from "./CartInfo";
import { Title } from "../common/Title";

export const Cart = ({ cart }) => {
  // This component will receive the cart array from the App.js and therefore it will map all the books from there and show them
  // in list in Item components, with the title and price passed in props
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectItems, setSelectItems] = useState(0);

  // This sumPrice function is to calculate the sum of the prices from the books in the cart array
  const sumPrice = () => {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price;
    }
    setTotalPrice(total);
  };

  // useEffect will detect everytime the cart state from the App.js changes and calculate the length of cart Array
  // And it will add all the prices from all the books in the cart array
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
