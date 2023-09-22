import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"

const Navbar = () => {
  const allusers=useSelector((state)=> state.app.users)
  return (
    <nav className="navbar navbar-expand-xl bg-light">
      <div className="container-fluid"> {/* Use container-fluid to take up full width */}
        <h4 className="navbar-brand" href="#">
          Redux Toolkit
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between" // Use justify-content-between
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/read" className="nav-link"  >
                All Post({allusers.length})
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
