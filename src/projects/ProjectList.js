import React from "react";
import { connect } from "react-redux";
import { openProjectModal } from "../store/actions/modalActions";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ openProjectModal, projects }) => {
  return (
    <div className="project-list">
      {projects &&
        projects.map((project) => {
          return (
            <button className={'project-button'} onClick={() => openProjectModal(project)} key={project.id}>
              <ProjectSummary project={project} />
            </button>
          );
        })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openProjectModal: (project) => dispatch(openProjectModal(project)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectList);
