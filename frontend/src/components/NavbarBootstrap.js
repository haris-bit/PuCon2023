import React from "react";

const NavbarBootstrap = (props) => {
  return (
    <nav
      classNameName={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div classNameName="container-fluid">
        <a classNameName="navbar-brand" href="/">
          {props.title}
        </a>

        <button
          classNameName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>

        <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
            <li classNameName="nav-item">
              <a classNameName="nav-link active" aria-current="page" href="/">
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBootstrap;
