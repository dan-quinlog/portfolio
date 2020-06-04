import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="navbar__links signed_in_links">
      <NavLink to="/" className="navbar__link">
        <li>Create</li>
      </NavLink>
      <NavLink to="/" className="navbar__link">
        <li>Post</li>
      </NavLink>
      <NavLink to="/" className="navbar__link">
        <li>Logout</li>
      </NavLink>
    </ul>
  );
};

export default SignedInLinks;
