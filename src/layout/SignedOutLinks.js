import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = (props) => {
  const filterHandler = (e) => {
    props.setViewFilter(e);
  };
  return (
    <ul className="navbar__links signed_out_links">
      <Link
        to="/"
        onClick={() => filterHandler("project")}
        className="navbar__link"
      >
        <li>Projects</li>
      </Link>
      <Link
        to="/"
        onClick={() => filterHandler("blog")}
        className="navbar__link"
      >
        <li>Blogs</li>
      </Link>
      <Link
        to="/"
        onClick={() => filterHandler("profile")}
        className="navbar__link"
      >
        <li>Profile</li>
      </Link>
    </ul>
  );
};

export default SignedOutLinks;
