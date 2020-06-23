import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import { signOut } from '../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul className="navbar__links signed_in_links">
      <NavLink to="/create" className="navbar__link">
        <li>Create</li>
      </NavLink>
      <NavLink to="/create" className="navbar__link">
        <li>Post</li>
      </NavLink>
      <button onClick={props.signOut} className="navbar__link">
        <li>Logout</li>
      </button>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
