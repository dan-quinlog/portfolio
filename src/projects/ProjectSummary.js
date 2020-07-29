import React from "react";
import moment from "moment";

const ProjectSummary = ({project}) => {
  return (
    <div className="project-card">
      <div className="project-card__type">{project.type}</div>
      <div className="project-card__title">{project.title}</div>
      <div className="project-card__timestamp">
        {moment(project.createdAt.toDate()).calendar()}
      </div>
    </div>
  );
};

export default ProjectSummary;
