import React, { Component } from "react";

import { connect } from "react-redux";

import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import ProfileSS from "../profile/ProfileSS";

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
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
          <ProjectList projects={projects} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
