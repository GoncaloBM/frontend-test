import React from "react";

export const Book = ({ id, title, author, price }) => {
  const classes = {
    book: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div className="book" style={classes.book}>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
      <div className="book-price">{price}</div>
    </div>
  );
};
