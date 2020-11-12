import React, { useState } from "react";
import "./App.css";
import { ListView } from "./components/views/list-view/List-View";
import { CreateView } from "./components/views/create-view/Create-View";
import { EditView } from "./components/views/edit-view/Edit-View";

function App() {
  const [view, setView] = useState("List");

  const changeView = (view) => {
    setView(view);
  };
  return (
    <div className="App">
      {view === "List" && <ListView />}
      {view === "Create" && <CreateView />}
      {view === "Edit" && <EditView />}
    </div>
  );
}

export default App;
