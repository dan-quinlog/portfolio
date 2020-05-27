import React from "react";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      <div className="card project-summary">
        {projects &&
          projects.map((project) => {
            return <ProjectSummary project={project} key={project.id} />;
          })}
      </div>
    </div>
  );
};

export default ProjectList;
