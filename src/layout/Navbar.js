import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  const history = useHistory();
  const signInHandler = (e) => {
    e.persist();
    e.preventDefault();
    if(e.ctrlKey) {
      history.push('/signin/')
    } else {
      history.push('/');
    }
  };
  return (
    <nav className="nav-wrapper">
      <div className="navbar">
        <Link
          to="/"
          onClick={signInHandler}
          className="navbar__logo navbar__link"
        >
          Daniel Quinlog
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
