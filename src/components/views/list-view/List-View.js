import React from "react";
import "../../list/List.css";
import { Cart } from "../../cart/Cart";
import { List } from "../../list/List";

export const ListView = ({
  setBookToEdit,
  cart,
  setCart,
  bookToEdit,
}) => {
  // In this view, we will have 2 different screens : List and the Cart
  return (
    <div className="list-view">
      <Cart cart={cart} />
      <List
        setBookToEdit={setBookToEdit}
        setCart={setCart}
        cart={cart}
        bookToEdit={bookToEdit}
      />
    </div>
  );
};
