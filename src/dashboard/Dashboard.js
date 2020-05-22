import React, { Component } from "react";

import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import ProfileSS from "../profile/ProfileSS";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__top">
          <div className="dashboard__top__left">
            <ProfileSS />
          </div>
          <div className="dashboard__top__right">
            <Notifications />
          </div>
        </div>
        <div className="dashboard__bottom">
          <ProjectList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
