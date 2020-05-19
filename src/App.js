import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/main.scss";

import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
