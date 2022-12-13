/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <>
      <div className="header">
        <div className="logo">Pokedex</div>
        
        <nav>
          <div
            className={sideNavOpen ? "wrapper-menu open" : "wrapper-menu"}
            id="toggle-menu"
            onClick={toggleSideMenu}
          >
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
          </div>
          <div className={sideNavOpen ? "nav" : "nav hide"} id="side-nav">
            <div className="search">
              <form className="search-form">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
          <div className="search-main">
            <form className="search-form">
              <input type="text" id="fname" name="fname" placeholder="Search" />
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
