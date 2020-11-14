import React from "react";

export const Book = ({ id, title, author, price, setBookToEdit }) => {
  const classes = {
    book: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      border: "1px solid black",
      margin: "1rem",
    },
    organize: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      width: "70%",
    },
    id: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "10%",
    },
    title: { fontSize: "3vw", textAlign: "center" },
    author: { fontSize: "2vw" },
    price: { fontSize: "2vw" },
    buttons: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      width: "20%",
    },
    button: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      height: "40%",
      width: "100%",
      fontSize: "3vw",
    },
  };
  return (
    <div className="book" style={classes.book}>
      <div style={classes.id}>{id}</div>
      <div style={classes.organize}>
        <div className="book-title" style={classes.title}>
          {title}
        </div>
        <div className="book-authors" style={classes.author}>
          {author}
        </div>
        <div className="book-price" style={classes.price}>
          Price : {price}
        </div>
      </div>
      <div style={classes.buttons}>
        <div
          style={classes.button}
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
        </div>
        <div style={classes.button}>Cart</div>
      </div>
    </div>
  );
};
