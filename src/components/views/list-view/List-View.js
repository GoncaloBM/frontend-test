import React from "react";
import { Book } from "../../book/Book";
import { useQuery, gql } from "@apollo/client";

const BOOKS_GRAPH = gql`
  {
    books {
      title
      bookId
      author
      price
    }
  }
`;

export const ListView = () => {
  const { loading, error, data } = useQuery(BOOKS_GRAPH);

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
      <div className="list-books" style={classes.listBooks}>
        {data.books.map((book, index) => {
          return (
            <Book
              key={index}
              id={book.bookId}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          );
        })}
      </div>
      <button>Create New</button>
    </div>
  );
};
