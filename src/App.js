import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ListView } from "./components/views/list-view/List-View";
import { CreateView } from "./components/views/create-view/Create-View";
import { EditView } from "./components/views/edit-view/Edit-View";
import { AppLayout } from "./components/layouts/AppLayout";

function App() {
  const [bookToEdit, setBookToEdit] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/create">
            <CreateView />
          </Route>
          <Route path="/edit">
            <EditView
              id={bookToEdit.id}
              title={bookToEdit.title}
              author={bookToEdit.author}
              price={bookToEdit.price}
              setBookToEdit={setBookToEdit}
              bookToEdit={bookToEdit}
            />
          </Route>
          <Route path="/">
            <ListView
              setBookToEdit={setBookToEdit}
              setCart={setCart}
              cart={cart}
              bookToEdit={bookToEdit}
            />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
