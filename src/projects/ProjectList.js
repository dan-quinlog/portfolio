import React from "react";

import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  return (
    <div className="project-list">
      <div className="card project-summary">
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </div>
    </div>
  );
};

export default ProjectList;
