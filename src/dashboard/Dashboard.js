import React, { Component } from "react";

import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <div className="left">
            <ProjectList />
          </div>
          <div className="right">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
