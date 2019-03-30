import React from "react";
import "./style.css";

const Nav = () => {
  return (
    <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="/"><h4 class="brand brand-logo" id="brand-logo1"><span>Senior</span>NextDoor</h4> </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/landing">Home</a></li>
          <li><a href="/options">Choose-Options</a></li>
          <li><a href="/services">Service-Request-Form</a></li>
          <li><a href="/searches">Search-Opportunity-Form</a></li>
          <li><a href="/userInfos">User</a></li>
          <li><a href="/send">Contact-Senior-Form</a></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Nav;