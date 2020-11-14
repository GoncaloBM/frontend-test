import { React, useState, useEffect } from "react";

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
      <div className="cart">
        {cart &&
          cart.map((item, index) => {
            return (
              <div className="item">
                <div className="item-name">{item.title}</div>
                <div className="item-price">{item.price}</div>
              </div>
            );
          })}
      </div>
      <div className="total">Total: {totalPrice}</div>
    </div>
  );
};
