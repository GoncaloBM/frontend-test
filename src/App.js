import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ListView } from "./components/views/list-view/List-View";
import { CreateView } from "./components/views/create-view/Create-View";
import { EditView } from "./components/views/edit-view/Edit-View";
import { AppLayout } from "./components/layouts/AppLayout";

function App() {
  // This bookToEdit state is to save the properties from the Book we want to edit
  // This state will be pass through the components until the Book component, to the Edit Button and therefore- Edit View
  const [bookToEdit, setBookToEdit] = useState({});

  // This Cart array state is to store all the books we want to add to cart. The function to add / remove are in the functions folder
  const [cart, setCart] = useState([]);

  // Used React-Router to create the different views of the App - List View - Create View - Edit View
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
