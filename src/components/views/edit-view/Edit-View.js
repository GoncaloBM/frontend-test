import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { TextInput } from "../create-view/TextInput";
import { EDIT_BOOK, BOOKS_GRAPH } from "../../../queries";

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

  const [editBook, { loading }] = useMutation(EDIT_BOOK, {
    onCompleted: () => returnHome(),
  });

  const returnHome = () => {
    setBookToEdit({});
  };

  const handleEditBook = async (e) => {
    e.preventDefault();
    await editBook({
      variables: { id, titleToEdit, authorToEdit, priceToEdit },
      awaitRefetchQueries: true,
      refetchQueries: [{ query: BOOKS_GRAPH }],
    });
  };

  useEffect(() => {
    if (bookToEdit.id === undefined) {
      history.push("/");
    }
  }, [bookToEdit]);

  return (
    <div className="edit-view">
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
