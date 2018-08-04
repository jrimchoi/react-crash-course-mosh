import React, { Component } from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
