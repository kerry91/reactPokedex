
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState} from "react";
const Navbar = () => {

    // eslint-disable-next-line no-unused-vars
    let categories = [
        "Gen1",
        "Gen2",
        "Gen3",
        "Gen4",
        "Gen5",
        "Gen6",
        "Gen7",
      ];
    
      // eslint-disable-next-line no-unused-vars
      const [search, setSearch] = useState();
      const [sideNavOpen, setSideNavOpen] = useState(false);
  
  
      // eslint-disable-next-line no-unused-vars
      const searchPoke = (e) => {
        if (e.keyn === "Enter") {
          e.preventDefault();
          setSearch("");
        }
      };
    
      const toggleSideMenu = () => {
        setSideNavOpen(!sideNavOpen);
      };

    return(
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
              {/*
              <form>
                <div className="search-btn">
                  <input
                    type="text"
                    placeholder="Enter Pokemon Name"
                    className="inputText"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    value={search}
                    onKeyPress={searchPoke}
                  ></input>
                </div>
              </form>
              
              <div className="dropdown">
                <button className="dropbtn">
                  Filter
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <ul>
                    {categories.map((value, pos) => {
                      return (
                        <li>
                          <a
                            href="#"
                            keyn={pos}
                            name={value}
                            onClick={(e) => {
                              
                            }}
                          >
                            {value}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
                  */}
            </div>
            {/*
            <div className="dropdown-main">
              <div className="dropdown">
                <button className="dropbtn">
                  Filter
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <ul className="navbar">
                    {categories.map((value, pos) => {
                      return (
                        <li>
                          <a
                            href="#"
                            keyn={pos}
                            name={value}
                            onClick={() => {
                           
                            }}
                          >
                            {value}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <form>
                <div className="search-btn">
                  <input
                    type="text"
                    placeholder="Enter Pokemon Name"
                    className="inputText"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    value={search}
                    onKeyPress={searchPoke}
                  ></input>
                </div>
              </form>
            </div>
                */}
          </nav>
        </div>
        </>
    )
}

export default Navbar