import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { TextInput } from "../../common/TextInput";
import { CREATE_BOOK, BOOKS_GRAPH } from "../../utils/queries";
import { Title } from "../../common/Title";

export const CreateView = ({ setView }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [showError, setShowError] = useState(false);
  // useMutation will create a new Book with the Query CREATE_BOOK and after will return to the home screen
  const [createBook, { loading, error }] = useMutation(CREATE_BOOK, {
    onCompleted: () => goHome(),
  });
  // useHistory is to change the url and return to different views
  const history = useHistory();
  const goHome = () => history.push("/");

  // Create Book with 3 variables and after that it will update cache with [...cache, CREATE_BOOK]
  const handleCreateBook = (e) => {
    e.preventDefault();
    if (title && author && price) {
      createBook({
        variables: { title, author, price },
        update: (cache, { data: { createBook } }) => {
          try {
            let data = cache.readQuery({ query: BOOKS_GRAPH });
            data = Object.assign({}, data);
            cache.writeQuery({
              query: BOOKS_GRAPH,
              data: { books: [...data.books, createBook] },
            });
          } catch (error) {
            console.error(error);
          }
        },
      });
    } else {
      // If some of the inputs are empty it will togle the error state and a message should appear
      setShowError(true);
    }
  };

  return (
    <div className="create-view">
      <Title title="Create Book" size="5vw" />
      <TextInput label={"Title"} setState={setTitle} />
      <TextInput label={"Author"} setState={setAuthor} />
      <TextInput label={"Price"} setState={setPrice} />
      <Button variant="contained" color="primary" onClick={handleCreateBook}>
        Create
      </Button>
      <Button variant="contained" color="secondary" onClick={goHome}>
        Cancel
      </Button>
      {showError && <div className="error-message">Input all fields</div>}
    </div>
  );
};
