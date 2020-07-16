import React from "react";
import ReactModal from "react-modal";
import CreateProject from "../projects/CreateProject";

ReactModal.setAppElement("#root");

const NewProjectModal = (props) => {
  const { modalIsOpen, closeNewProjectModal } = props;
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "800px",
    },
    overlay: {
      backgroundColor: "rgba(1, 1, 1, .75)",
    },
  };
  return (
    <ReactModal
      style={modalStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeNewProjectModal}
    >
      <CreateProject />
    </ReactModal>
  );
};

export default NewProjectModal;
