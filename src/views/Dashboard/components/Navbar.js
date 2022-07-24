import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
const Navbar = ({ user }) => {
  const { signout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://www.jgreendev721.com"
          _target="blank"
        >
          {user?.displayName}
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.jgreendev721.com"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.jgreendev721.com">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://www.jgreendev721.com"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li className="text-primary">
                  <a
                    className="dropdown-item"
                    href="https://www.jgreendev721.com"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.jgreendev721.com"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.jgreendev721.com"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <p onClick={signout} className="nav-link">
                <FaSignOutAlt />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
