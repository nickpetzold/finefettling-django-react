/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer-text">© 2019 FineFettling.com. All Rights Reserved.</h3>
      <div className="social-links">
        <a href="https://github.com/nickpetzold">
          <i className="fab fa-github-square"></i>
        </a>
        <a href="https://www.facebook.com/Wendy-Thomas-Art-Design-1427535447541428/">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com/NickPetzold">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="mailto:matthewpetzold@gmail.com">
          <i className="fas fa-envelope-square"></i>
        </a>
      </div>
      <h3 className="footer-text">Site designed by FineFettling Design, Lisbon 🇵🇹</h3>
    </div>
  );
};

export default Footer;
