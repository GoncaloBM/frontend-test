import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { TextInput } from "../create-view/TextInput";
import { EDIT_BOOK } from "../../../queries";

export const EditView = ({ setView, id, title, author, price }) => {
  const [titleToEdit, setTitle] = useState(title);
  const [authorToEdit, setAuthor] = useState(author);
  const [priceToEdit, setPrice] = useState(price);

  const [editBook, { loading }] = useMutation(EDIT_BOOK, {
    onCompleted: () => setView("List"),
  });

  const handleEditBook = (e) => {
    e.preventDefault();
    editBook({
      variables: { id, titleToEdit, authorToEdit, priceToEdit },
    });
  };

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
      <button
        onClick={() => {
          setView("List");
        }}
      >
        Cancel
      </button>
    </div>
  );
};
