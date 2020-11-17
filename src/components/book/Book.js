import React, { useState, useEffect } from "react";
import "./Book.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import { addToCart, removeFromCart } from "../functions/cartFunctions";
import { BooksInfo } from "./book-infos/BooksInfo";

export const Book = ({
  id,
  title,
  author,
  price,
  setBookToEdit,
  setCart,
  cart,
  bookToEdit,
}) => {
  const [checked, setChecked] = useState(false);

  const history = useHistory();
  const goToEdit = () => history.push("/edit");

  // This function will change the checkbox
  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    // When checked change to true it will trigger a function to add an object to the cart state in the App.js
    // When checked change to false it will trigger a function to remove an object with the respective id from the cart state in the App.js
    if (checked) {
      setCart(addToCart(cart, { id: id, title: title, price: price }));
    } else {
      setCart(removeFromCart(cart, { id: id, title: title, price: price }));
    }

    // When bookToEdit change is not empty, it will go to Edit View
    // This bookToEdit change when Edit Button is pressed and pass the book infos to the Edit View
    if (bookToEdit.id !== undefined) {
      goToEdit();
    }
  }, [checked, bookToEdit]);

  return (
    <div className="book" id={title}>
      <div className="id">{id}</div>
      <BooksInfo>
        <div className="book-title title">{title}</div>
        <div className="book-authors author">{author}</div>
        <div className="book-price price">Price : {price}</div>
      </BooksInfo>
      <div className="buttons">
        <div className="edit-button">
          <Button
            color="primary"
            onClick={() =>
              setBookToEdit({
                id: id,
                title: title,
                author: author,
                price: price,
              })
            }
          >
            Edit
          </Button>
        </div>
        <div className="checkbox">
          <Checkbox
            checked={checked}
            onChange={handleCheck}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </div>
    </div>
  );
};
