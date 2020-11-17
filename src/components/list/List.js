import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Book } from "../book/Book";
import { BOOKS_GRAPH } from "../utils/queries";
import { Title } from "../common/Title";

export const List = ({ setBookToEdit, setCart, cart, bookToEdit }) => {
  // This useQuery will fetch from the query BOOKS_GRAPH
  // While is fetching, it will render loading
  // If something wrong, it will render error
  // If successfull it will render all the books from the graphQL query
  const { loading, error, data } = useQuery(BOOKS_GRAPH);
  const history = useHistory();
  const goToCreate = () => history.push("/create");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // In the render, we will map all the books from the query and pass to the Book Componeent the respective Id, title, Author and price
  // As well as the properties to the Edit View and to the Cart
  return (
    <div className="list">
      <Title title="Book Store" size="5vw" />
      <Button variant="contained" color="primary" onClick={goToCreate}>
        Create
      </Button>
      <div className="list-books">
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
