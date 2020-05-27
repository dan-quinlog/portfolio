import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="project-details">
      <div className="project-card">
        <div className="card content">
  <span className="card-title">card title {id}</span>
          <p>
            We think we know that if you incentivize proactively then you may
            also disintermediate perfectly. The capability to implement
            wirelessly leads to the awards page of the pudding is in the
            industry,
          </p>
          <div className="card-action">
            <div className="author">posted by</div>
            <div className="date">2nd sept 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
