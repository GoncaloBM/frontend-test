import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Book } from "../book/Book";
import { BOOKS_GRAPH } from "../../queries";

export const List = ({ setBookToEdit, setCart, cart, bookToEdit }) => {
  const { loading, error, data } = useQuery(BOOKS_GRAPH, {
    // fetchPolicy: "cache-and-network",
  });
  const history = useHistory();
  const goToCreate = () => history.push("/create");

  const classes = {
    listBooks: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="list">
      <Button variant="contained" color="primary" onClick={goToCreate}>
        Create
      </Button>
      <div className="list-books" style={classes.listBooks}>
        {data.books.map((book, index) => {
          return (
            <Book
              key={index}
              id={book.bookId}
              title={book.title}
              author={book.author}
              price={book.price}
              setBookToEdit={setBookToEdit}
              setCart={setCart}
              cart={cart}
              bookToEdit={bookToEdit}
            />
          );
        })}
      </div>
    </div>
  );
};
