import React, { useState } from "react";
import "./App.css";
import { ListView } from "./components/views/list-view/List-View";
import { CreateView } from "./components/views/create-view/Create-View";
import { EditView } from "./components/views/edit-view/Edit-View";
import { AppLayout } from "./components/layouts/AppLayout";

function App() {
  const [view, setView] = useState("List");

  const changeView = (view) => {
    setView(view);
  };
  return (
    <AppLayout>
      {view === "List" && <ListView />}
      {view === "Create" && <CreateView />}
      {view === "Edit" && <EditView />}
    </AppLayout>
  );
}

export default App;
