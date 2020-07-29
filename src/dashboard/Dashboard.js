import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { firestoreConnect } from "react-redux-firebase";

import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import ProfileSS from "../profile/ProfileSS";

import ProjectModal from "../modals/ProjectModal";
import { closeProjectModal } from "../store/actions/modalActions";

class Dashboard extends Component {
  render() {
    const { projects, notifications, modals } = this.props;
    return (
      <div className="dashboard">
        <ProjectModal
          modalIsOpen={modals.projectModal}
          closeProjectModal={this.props.closeProjectModal}
          modalProject={modals.project}
        />
        <div className="dashboard__top">
          <div className="dashboard__top__left">
            <ProfileSS />
          </div>
          <div className="dashboard__top__right">
            <Notifications notifications={notifications} />
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
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications,
    modals: state.modals,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeProjectModal: () => dispatch(closeProjectModal()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
