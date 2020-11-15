import React from "react";
import "../../list/List.css";
import { Cart } from "../../cart/Cart";
import { List } from "../../list/List";

export const ListView = ({
  setView,
  setBookToEdit,
  cart,
  setCart,
  bookToEdit,
}) => {
  return (
    <div className="list-view">
      <Cart cart={cart} />
      <List
        setBookToEdit={setBookToEdit}
        setView={setView}
        setCart={setCart}
        cart={cart}
        bookToEdit={bookToEdit}
      />
    </div>
  );
};
