import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { TextInput } from "./TextInput";
import { CREATE_BOOK, BOOKS_GRAPH } from "../../../queries";

export const CreateView = ({ setView }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [createBook, { loading, error }] = useMutation(CREATE_BOOK);

  const handleCreateBook = async (e) => {
    e.preventDefault();
    // the mutate function also doesn't return a promise
    await createBook({
      variables: { title, author, price },
      // update: (cache, { data: { createBook } }) => {
      //   const data = cache.readQuery({ query: BOOKS_GRAPH });
      //   data.books = [...data.books, createBook];
      //   cache.writeQuery({ query: BOOKS_GRAPH }, data);
      // },
      awaitRefetchQueries: true,
      refetchQueries: [{ query: BOOKS_GRAPH }],
    });
  };

  return (
    <div className="create-view">
      <TextInput label={"Title"} setState={setTitle} />
      <TextInput label={"Author"} setState={setAuthor} />
      <TextInput label={"Price"} setState={setPrice} />
      <button onClick={handleCreateBook}>Create</button>
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
