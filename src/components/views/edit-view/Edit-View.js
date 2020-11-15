import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { TextInput } from "../create-view/TextInput";
import { EDIT_BOOK } from "../../../queries";

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

  const handleEditBook = (e) => {
    e.preventDefault();
    editBook({
      variables: { id, titleToEdit, authorToEdit, priceToEdit },
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
      <button onClick={handleEditBook}>Edit</button>
      <button onClick={returnHome}>Cancel</button>
    </div>
  );
};
