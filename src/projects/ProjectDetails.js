import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="project-details">
        <div className="project-card">
          <div className="card content">
            <span className="card-title">
              {project.title} {project.id}
            </span>
            <p>{project.content}</p>
            <div className="card-action">
              <div className="author">posted by</div>
              <div className="date">2nd sept 2am</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading project</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
