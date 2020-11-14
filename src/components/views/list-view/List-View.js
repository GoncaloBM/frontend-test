import React from "react";
import { Book } from "../../book/Book";
import { useQuery } from "@apollo/client";
import { BOOKS_GRAPH } from "../../../queries";

export const ListView = ({ setView, setBookToEdit }) => {
  const { loading, error, data } = useQuery(BOOKS_GRAPH, {
    fetchPolicy: "cache-and-network",
  });

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
    <div className="list-view">
      <button
        onClick={() => {
          setView("Create");
        }}
      >
        Create New
      </button>
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
            />
          );
        })}
      </div>
    </div>
  );
};
