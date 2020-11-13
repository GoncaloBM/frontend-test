import React, { useState } from "react";
import { TextInput } from "./TextInput";

export const CreateView = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div className="create-view">
      <TextInput label={"Name"} setState={setName} />
      <TextInput label={"Author"} setState={setAuthor} />
      <TextInput label={"Price"} setState={setPrice} />
      <button>Create</button>
      <button>Cancel</button>
    </div>
  );
};
