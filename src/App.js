import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/main.scss";

import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";
import ProjectDetails from "./projects/ProjectDetails";
import SignIn from './auth/SignIn';
import CreateProject from './projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
