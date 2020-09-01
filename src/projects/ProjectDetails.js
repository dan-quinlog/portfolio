import React from "react";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";

const ProjectDetails = ({ project }) => {
  if (project) {
    const imageStyle = {
      width: "100%",
      height: "200px",
      backgroundImage: "url(" + project.image + ")",
      backgroundSize: "cover",
    };
    return (
      <div className="project-modal">
        {project.image ? (
          <div className="project-modal__image" style={imageStyle}>
            image text
          </div>
        ) : null}
        <span className="project-modal__title">
          {project.title} {project.id}
        </span>
        <p className="project-modal__content">
          {ReactHtmlParser(project.content)}
        </p>
        <div className="project-modal__details">
          <div className="project-modal__author">posted by</div>
          <div className="project-modal__date">
            {moment(project.createdAt.toDate()).calendar()}
          </div>
        </div>
      </div>
    );
  }
  return <div>loading</div>;
};

export default ProjectDetails;
