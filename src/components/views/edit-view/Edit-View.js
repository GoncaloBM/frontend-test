import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { TextInput } from "../../common/TextInput";
import { EDIT_BOOK, BOOKS_GRAPH } from "../../utils/queries";
import { Title } from "../../common/Title";

export const EditView = ({
  id,
  title,
  author,
  price,
  setBookToEdit,
  bookToEdit,
}) => {
  const [titleToEdit, setTitle] = useState(title);
  const [authorToEdit, setAuthor] = useState(author);
  const [priceToEdit, setPrice] = useState(price);
  const history = useHistory();
  // useMutation will create a new Book with the Query EDIT and after will return to the home screen
  const [editBook, { loading }] = useMutation(EDIT_BOOK, {
    onCompleted: () => returnHome(),
  });

  // This change of state will make to return to home because of the useEffect
  // If the bookToEdit from the App.js is empty, it will redirect to '/'
  const returnHome = () => {
    setBookToEdit({});
  };

  const handleEditBook = async (e) => {
    e.preventDefault();
    // This is an async function so we could refetch the query adter the Edit Mutation
    await editBook({
      variables: { id, titleToEdit, authorToEdit, priceToEdit },
      awaitRefetchQueries: true,
      refetchQueries: [{ query: BOOKS_GRAPH }],
    });
  };

  useEffect(() => {
    // Always the bookToEdit change, it will check if is empty, and if so, it will redirect to home
    if (bookToEdit.id === undefined) {
      history.push("/");
    }
  }, [bookToEdit]);

  return (
    <div className="edit-view">
      <Title title="Edit Book" size="5vw" />
      <TextInput
        label={"Title"}
        initialValue={titleToEdit}
        setState={setTitle}
      />
      <TextInput
        label={"Author"}
        initialValue={authorToEdit}
        setState={setAuthor}
      />
      <TextInput
        label={"Price"}
        initialValue={priceToEdit}
        setState={setPrice}
      />
      <Button variant="contained" color="primary" onClick={handleEditBook}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" onClick={returnHome}>
        Cancel
      </Button>
    </div>
  );
};
