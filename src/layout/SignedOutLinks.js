import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="navbar__links signed_out_links">
      <NavLink to="/" className="navbar__link">
        <li>Projects</li>
      </NavLink>
      <NavLink to="/" className="navbar__link">
        <li>Blog</li>
      </NavLink>
      <NavLink to="/" className="navbar__link">
        <li>Profile</li>
      </NavLink>
    </ul>
  );
};

export default SignedOutLinks;
