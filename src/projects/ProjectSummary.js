import React from "react";

const ProjectSummary = ({project}) => {
  return (
    <div className="card-content">
      <span className="card-title">{project.title}</span>
      <p>Posted by the NetNinja</p>
      <p>3rd sept 2am</p>
    </div>
  );
};

export default ProjectSummary;
