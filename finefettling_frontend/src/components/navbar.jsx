import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="title-banner">
        <h1>Fine Fettling</h1>
      </div>
      <div className="nav-btns">
        <a href="/" className="tab home-tab">HOME</a>
        <a href="/" className="tab garage-tab">GARAGE</a>
        <a href="/" className="tab meetings-tab">MEETINGS</a>
      </div>
    </div>
  );
};

export default Navbar;
