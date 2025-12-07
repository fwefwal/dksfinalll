import React from "react";
import { NavLink } from "react-router-dom";

import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import linkedinIcon from "../assets/icon-linkedin.svg";

function Layout({ children }) {
  return (
    <div className="page">
      <header style={{ display: 'flex'}} className="page-header" >
        <div className="container header-inner" >
          <nav className="main-nav">
            <div className="nav-links">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link--active" : "")
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/works"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link--active" : "")
                }
              >
                Works
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="page-footer">
        <div className="container footer-inner">
          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook">
              <img src={facebookIcon} alt="Бұл жерде фото болуы керек, бірақ ол әлі жоқ..." />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={instagramIcon} alt="يجب أن تكون هناك صورة هنا، لكنها ليست موجودة بعد..." />
            </a>
            <a href="https://x.com" aria-label="Twitter">
              <img src={twitterIcon} alt="ここには写真があるはずですが、まだありません..." />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="There should have been a photo here, but there isn't one yet..." />
            </a>
          </div>
          <p className="footer-copy">Copyright ©2020 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
