import React from "react";
import ReactModal from "react-modal";
import CreateProject from "../projects/CreateProject";
import ProjectDetails from "../projects/ProjectDetails";

ReactModal.setAppElement("#root");

const NewProjectModal = (props) => {
  const { modalIsOpen, closeProjectModal } = props;
  const project = props.modalProject ? props.modalProject : null;
  const modalForm =
    project === null ? <CreateProject /> : <ProjectDetails project={project} />;
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
    },
    overlay: {
      backgroundColor: "rgba(1, 1, 1, .75)",
    },
  };
  return (
    <ReactModal
      style={modalStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeProjectModal}
    >
      {modalForm}
    </ReactModal>
  );
};

export default NewProjectModal;
