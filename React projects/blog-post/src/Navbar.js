import React from "react";

const NavBar = () => {
  return (
    <div class="ui pointing menu bg-light">
      <a class="active item" href="/">
        Home
      </a>
      <a class="item" href="/">
        About
      </a>
      <a class="item" href="/">
        Contact Us
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
