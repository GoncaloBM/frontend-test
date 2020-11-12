import React from "react";

export const Book = ({ id, title, author, price }) => {
  return (
    <div className="book">
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
      <div className="book-price">{price}</div>
    </div>
  );
};
