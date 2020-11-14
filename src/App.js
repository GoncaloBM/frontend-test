import React, { useState, useEffect } from "react";
import "./App.css";
import { ListView } from "./components/views/list-view/List-View";
import { CreateView } from "./components/views/create-view/Create-View";
import { EditView } from "./components/views/edit-view/Edit-View";
import { AppLayout } from "./components/layouts/AppLayout";

function App() {
  const [view, setView] = useState("Create");
  const [bookToEdit, setBookToEdit] = useState({});

  useEffect(() => {
    if (bookToEdit.id !== undefined) {
      setView("Edit");
    }
  }, [bookToEdit]);

  return (
    <AppLayout>
      {view === "List" && (
        <ListView setView={setView} setBookToEdit={setBookToEdit} />
      )}
      {view === "Create" && <CreateView setView={setView} />}
      {view === "Edit" && (
        <EditView
          id={bookToEdit.id}
          title={bookToEdit.title}
          author={bookToEdit.author}
          price={bookToEdit.price}
          setView={setView}
        />
      )}
    </AppLayout>
  );
}

export default App;
