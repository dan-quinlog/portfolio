import React from "react";
import { connect } from "react-redux";

import { signOut } from "../store/actions/authActions";
import { openNewProjectModal } from "../store/actions/modalActions";

const SignedInLinks = (props) => {
  return (
    <ul className="navlinks signed_in_links">
      <button
        onClick={props.openNewProjectModal}
        className="navlinks__link"
      >
        <li>Create</li>
      </button>
      <button onClick={props.signOut} className="navlinks__link">
        <li>Logout</li>
      </button>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    openNewProjectModal: () => dispatch(openNewProjectModal()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
