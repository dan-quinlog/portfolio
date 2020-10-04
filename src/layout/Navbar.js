import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { setViewFilter, toggleHamburger } from "../store/actions/dashActions";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = (props) => {
  const { auth, hamburger } = props;
  console.log(hamburger);
  const links = auth.uid ? (
    <SignedInLinks />
  ) : (
    <SignedOutLinks setViewFilter={props.setViewFilter} />
  );
  const history = useHistory();
  const signInHandler = (e) => {
    e.persist();
    e.preventDefault();
    if (e.ctrlKey) {
      history.push("/signin/");
    } else {
      props.setViewFilter("profile");
      history.push("/");
    }
  };
  return (
    <nav className="nav-wrapper">
      <div className="navbar">
        <Link to="/" onClick={signInHandler} className="navbar__logo">
          Daniel Quinlog
        </Link>
        <div
          className="hamburger"
          onClick={() => props.toggleHamburger()}
        >V</div>
        {links}
      </div>
      <div className="navdropdown">{hamburger ? links : null}</div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    hamburger: state.dash.hamburgerView,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setViewFilter: (viewFilter) => dispatch(setViewFilter(viewFilter)),
    toggleHamburger: () => dispatch(toggleHamburger()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
