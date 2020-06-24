import React from "react";
import ReactModal from "react-modal";

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
      <h1>hi there, I'm in a modal</h1>
    </ReactModal>
  );
};

export default NewProjectModal;
