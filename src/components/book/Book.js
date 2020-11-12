import React from "react";

export const Book = ({ id, title, authors, price }) => {
  return (
    <div className="book">
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors.map((author, index) => {
          return (
            <div className="book-author" key={index}>
              {author}
            </div>
          );
        })}
      </div>
      <div className="book-price">{price}</div>
    </div>
  );
};
