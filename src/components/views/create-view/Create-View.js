import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { TextInput } from "./TextInput";
import { CREATE_BOOK, BOOKS_GRAPH } from "../../../queries";

export const CreateView = ({ setView }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [createBook, { loading, error }] = useMutation(CREATE_BOOK);
  const history = useHistory();
  const goHome = () => history.push("/");

  const handleCreateBook = (e) => {
    e.preventDefault();
    // the mutate function also doesn't return a promise
    createBook({
      variables: { title, author, price },
      update: (cache, { data: { createBook } }) => {
        try {
          let data = cache.readQuery({ query: BOOKS_GRAPH });
          data = Object.assign({}, data);
          data.books = [...data.books, createBook];
          cache.writeQuery({ query: BOOKS_GRAPH }, data);
        } catch (error) {
          console.error(error);
        }
      },
    });
  };

  return (
    <div className="create-view">
      <TextInput label={"Title"} setState={setTitle} />
      <TextInput label={"Author"} setState={setAuthor} />
      <TextInput label={"Price"} setState={setPrice} />
      <button onClick={handleCreateBook}>Create</button>
      <button onClick={goHome}>Cancel</button>
    </div>
  );
};
